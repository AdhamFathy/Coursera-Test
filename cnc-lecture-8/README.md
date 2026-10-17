# CNC Lecture 8: Pregnancy Care Nutrition + Childhood Nutrition

Built 17 Oct 2026 in a cloud session. It uses the kit synced to Google Drive (`cnc-lecture-kit`): the same `cnc.css`, `cnc.js` and logos, with the Diabetes MNT deck's CSS layers copied as `_base.css`. As with lectures 5 and 6, there is one deck per source file.

| Deck | Slides | Source |
|---|---|---|
| `CNC - Pregnancy Care Nutrition.pdf/.html` | 38 (cover · agenda · 35 · Thank You) | `CNC_R49 - LEC 08 (...)\Pregnancy.pdf` (8 pp) |
| `CNC - Childhood Nutrition.pdf/.html` | 20 (cover · agenda · 17 · Thank You) | `CNC_R49 - LEC 08 (...)\Childhood.pdf` (3 pp) |

- Both decks pass the kit's `probe` (no CLIP, BELOW-FOOTER or OVERFLOW), `fillcheck` (clean) and a word-diff against the source.
- There is no verse page, no round number and no lecture number.

## Put it on the PC

1. Unzip `CNC Lecture 8 - kit folders.zip` into `cnc-lecture-kit\`. That adds `pregnancy-care-nutrition\` and `childhood-nutrition\`.
2. Copy the PDF and HTML files to `F:\Lifestyle Foundation\CNC Lectures\`.
3. To rebuild with Edge and the local Montserrat OTFs, run:
   `build.ps1 -Lecture pregnancy-care-nutrition -Out "...\CNC - Pregnancy Care Nutrition.pdf"`
   - `lecture.html` is assembled from `_base.css` + `pc.css` / `cn.css` + `body.html`. Edit those files, not `lecture.html`.

## Photos

- The sources have no photos. Pregnancy p.7 has one WordArt banner, "أعشاب تزيد من ادرار الحليب", which was rebuilt natively as the slide heading.
- All photos are reused from the kit library: diabetes-mnt, dyslipidaemia-mnt, hypertension-mnt, anc-food-drug-interaction and anc-adverse-food-reaction. Each lecture's `img\CREDITS.txt` lists where each one came from. Unsplash and Pexels were not reachable from the cloud.
- The photos are food, objects or men only, per the modesty rule.

## Corrections made

**Spelling and units**
- Protein **1.2–1.5 mg/kg → g/kg** (cited on the slide).
- Vitamin A **"750 mg" → µg**.
- Ginger "in doses of gram a day" → **1 gram** (cited: Vutyavanich 2001).
- GDM risk factors were missing "3-".
- The nutrient list repeated **4** twice. It is now 04 Vitamins → 11 Vitamin A.
- Snakes → **Snacks**.
- Other spelling fixes:
  - Salamon/Mackreal, Proplem, tracet, delivary, Requirment, Rickett's, noemal(ly), Parentral, Kcl, Coffe, wont
  - Pediarition, Protiens, beverges, deserts, Caloriec, Defficincy, Pyberty, potatos, Zink
  - "Lactose Int…" → Lactose Intolerance
  - Arabic: مطتبخش → متطبخش, الاوكسينوسين → الأوكسيتوسين, السسمسم → السمسم, تجتب → تجنب, and the ه/ة and ي/ى endings

**Outdated RDAs, corrected with a `.ref` line on the slide (NIH ODS / IOM DRI)**

| Nutrient | Handout | Now |
|---|---|---|
| Iron | 30 mg | **27 mg** |
| Zinc | 12 mg | **11 mg** (12 mg ≤ 18 y shown) |
| Vitamin C | 80 mg | **85 mg** (80 mg ≤ 18 y shown) |
| Vitamin A | 750 | **770 µg** (750 µg ≤ 18 y shown) |

## Flagged, not changed (for Dr. El-Khateeb)

1. "Blood volume increases 20 %": the total blood volume rise is about 40–50 %. The 20 % fits **red-cell mass**, which is what causes the hemodilution shown on the same slide.
2. Lactation energy contradicts itself. The handout says +500 kcal/day in the first 6 months, then +450 / +300 kcal. The IOM figures are about +330 / +400 kcal from the diet.
3. Child weight formula for 1–5 y, (age + 5) × 2, gives 12 kg at age 1. The usual formula is **(age + 4) × 2**. The 5–12 y formula "age × 4" also runs high.
4. "الخميرة البيرة يوميا مع ملعقة عسل … مهم جدا للنمو" is not evidence-based. It was kept as written.
5. The Pica row is empty in the source, so it is shown as a write-in line. The vitamins and minerals table is empty in the source, so it is a student write-in table.
