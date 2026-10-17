// Linux port of build.ps1 / probe / fillcheck / web.ps1 for the cloud session.
// node build.js <lectureFolder> pdf <out.pdf> | probe | fill | png <outdir> | web <out.html>
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const kit = __dirname;
const [lec, mode, out] = process.argv.slice(2);
const dir = path.join(kit, lec);
const html0 = fs.readFileSync(path.join(dir, 'lecture.html'), 'utf8');
const css = fs.readFileSync(path.join(kit, 'cnc.css'), 'utf8').replace(/@font-face\{[^}]*\}\s*/g, '');
const fonts = fs.readFileSync(path.join(kit, 'fonts-local.css'), 'utf8');
function localHtml(extraJs) {
  let h = html0.replace('<link rel="stylesheet" href="../cnc.css">', '<style>\n' + fonts + css + '</style>');
  if (extraJs) h = h.replace('</body>', '<script>' + extraJs + '</script></body>');
  return h;
}
(async () => {
  if (mode === 'web') { return web(); }
  const fillJs = mode === 'fill' ? fs.readFileSync(path.join(kit, 'fill.js'), 'utf8') : '';
  const probeJs = mode === 'probe' ? fs.readFileSync(path.join(kit, 'probe.js'), 'utf8') : '';
  const tmp = path.join(dir, '_build.html');
  fs.writeFileSync(tmp, localHtml(fillJs || probeJs));
  const b = await chromium.launch({ args: ['--allow-file-access-from-files', '--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 960, height: 540 } });
  await p.goto('file://' + tmp, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(600);
  if (mode === 'probe' || mode === 'fill') {
    await p.waitForFunction(() => /#OVF#/.test(document.body.innerText), null, { timeout: 15000 });
    const t = await p.evaluate(() => document.body.innerText);
    const m = t.match(/#OVF#([\s\S]*?)#END#/); console.log(m ? m[1] : '(no output)');
  } else if (mode === 'pdf') {
    await p.pdf({ path: out, width: '960px', height: '540px', printBackground: true, preferCSSPageSize: true });
    const n = (html0.match(/<section/g) || []).length;
    const pages = execFileSync('pdfinfo', [out]).toString().match(/Pages:\s+(\d+)/)[1];
    console.log('OK', out, (fs.statSync(out).size / 1048576).toFixed(2) + ' MB', 'pages=' + pages, 'sections=' + n, pages == n ? '' : '  <<< MISMATCH');
  }
  await b.close(); fs.unlinkSync(tmp);
})();
function web() {
  // same as web.ps1: inline CSS/JS, Google Fonts, base64 images (<=1400px), screen layout
  let h = html0, c = css.replace(/"LS Mont"/g, 'Montserrat').replace(/"LS Ar"/g, '"IBM Plex Sans Arabic"');
  h = h.replace(/"LS Mont"/g, 'Montserrat').replace(/"LS Ar"/g, '"IBM Plex Sans Arabic"');
  const screen = '\n@media screen{\n  html,body{background:#EFE9E4}\n  body{padding:28px 0}\n  .pg{margin:0 auto 28px;box-shadow:0 10px 34px rgba(72,55,97,.16);border-radius:4px}\n}\n';
  const head = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' + '<style>\n' + c + screen + '</style>';
  h = h.replace('<link rel="stylesheet" href="../cnc.css">', head);
  const fit = '<script>(function(){function f(){var w=window.innerWidth,z=Math.min(1,(w-16)/960);document.body.style.zoom=z<1?z:"";}window.addEventListener("resize",f);f();})();</script>';
  const js = fs.readFileSync(path.join(kit, 'cnc.js'), 'utf8');
  h = h.replace('<script src="../cnc.js"></script>', '<script>\n' + js + '\n</script>' + fit);
  const tmpd = fs.mkdtempSync('/tmp/cncweb-');
  const imgs = [...new Set([...h.matchAll(/src="(img\/[^"]+)"/g)].map(m => m[1]))];
  for (const m of imgs) {
    const src = path.join(dir, m), small = path.join(tmpd, path.basename(m).replace(/\.\w+$/, '.jpg'));
    execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', src, '-vf', "scale='if(gt(iw,ih),min(1400,iw),-2)':'if(gt(iw,ih),-2,min(1400,ih))'", '-q:v', '4', small]);
    h = h.split('src="' + m + '"').join('src="data:image/jpeg;base64,' + fs.readFileSync(small).toString('base64') + '"');
  }
  for (const l of ['horizontal', 'vertical', 'community-horizontal', 'community-vertical']) {
    if (!h.includes('../brand/' + l + '.png')) continue;
    h = h.split('../brand/' + l + '.png').join('data:image/png;base64,' + fs.readFileSync(path.join(kit, 'brand', l + '.png')).toString('base64'));
  }
  fs.writeFileSync(out, h);
  console.log('OK', out, (fs.statSync(out).size / 1048576).toFixed(2) + ' MB');
}
