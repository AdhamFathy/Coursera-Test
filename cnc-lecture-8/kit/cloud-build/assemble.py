# Linux twin of assemble.ps1: lecture.html = head + _base.css + <lecture>.css + body.html
import sys, os
d = sys.argv[1]; title = sys.argv[2]; css = sys.argv[3]
base = open(os.path.join(d, '_base.css'), encoding='utf-8').read()
own = open(os.path.join(d, css), encoding='utf-8').read()
body = open(os.path.join(d, 'body.html'), encoding='utf-8').read()
html = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>' + title + '</title>\n'
        '<link rel="stylesheet" href="../cnc.css">\n<style>\n' + base + '\n' + own + '\n</style>\n</head>\n' + body)
open(os.path.join(d, 'lecture.html'), 'w', encoding='utf-8').write(html)
print('assembled', d, html.count('<section'), 'sections')
