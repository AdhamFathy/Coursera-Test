# CNC Lecture 8: Pregnancy Nutrition + Childhood Nutrition (handoff brief)

Prepared 17 Oct 2026 in a cloud session that **cannot reach the PC kit**
(`cnc-lecture-kit\`), so nothing here is designed yet. This is the content prep only.
Build it in the **Lecture Designs (CNC + Community)** desktop session with the usual
kit, rules and memory ([[cnc-lecture-designs]]).

## Sources (Drive / F:)

`ROUND 49- CNC - July 2026\R49 STUDENTS\R49 PDFs\CNC_R49 - LEC 08 (  Pregnancy Nutrition + Childhood Nutrition )\`

| File | Size | Topic |
|---|---|---|
| `Pregnancy.pdf` | 883 KB | Pregnancy + Lactation (EN + an AR "Complaint / non-drug solutions" table + AR breastfeeding benefits) |
| `Childhood.pdf` | 580 KB | Childhood Obesity + Short Stature + nutrient needs (EN + AR إرشادات) |

The same two files are also in `R48 - LEC 09 (...)`, and older rounds (R45–R47) have the same
`Pregnancy` file under other names. R49 is the source to use.

## Suggested output (same as lectures 5 and 6: one deck per source file)

- `CNC - Pregnancy & Lactation Nutrition.pdf/.html`. Adham called it "Pregnancy Care Nutrition", so confirm the title.
- `CNC - Childhood Nutrition.pdf/.html`
- Kit folders `pregnancy-nutrition\` and `childhood-nutrition\`. Build them with `assemble.ps1`
  (`_base.css` + `htn.css` + `vm.css` + the lecture's css) so `.gf / .mc / .dose / .act / .cmp2` etc. come for free.
- R50 Drive folder: `CNC_R50 - LEC 08 ( Pregnancy Nutrition + Childhood Nutrition )` doesn't exist yet.

## Slide plan, deck 1: Pregnancy & Lactation (about 32 slides + covers)

Keep the source order. The `Part` dividers use `.sec`.

1. **Part 01: Physiological changes**
   - Blood (volume, plasma, edema, hemodilution, lipids ↑).
   - Glucose (insulin resistance).
   - GIT (nausea 70 % / vomiting 40 %, heartburn, constipation), kidney (UTI).
   - Food intake, cardiovascular (CO ↑ 30–50 %, BP ↓ 9 % first half), immune, hormones.
   - About 3 slides, using `.st` stat tiles for the percentages.
2. **Preparation for a healthy pregnancy**
   - The 5 steps.
   - Underweight chain (→ LBW → ↓ IQ → education problem → short stature) as a `.ch` chain.
   - Overweight (→ GDM, HTN, infection).
   - About 2 slides.
3. **Part 02: Nutrient needs**
   - Energy: weight × 25; T1 +0, T2 +350, T3 +450 kcal/day. Use 3 `.dz` big-number tiles.
   - Protein / CHO / Fat + Omega 3 sources.
   - Vitamins: B12 + Folate (600 vs 400 µg, NTD, 50 % unplanned, 8 weeks, sources). 2 slides.
   - Calcium & Vit D.
   - Phosphorus & Mg + Zinc.
   - Fluids (8–10 cups, what happens if low).
   - Iron (risks + food sources + Vit C).
   - Vit C. Vit A (teratogenic ↑ / LBW ↓).
   - About 9 slides. The monograph + `.dose` strip pattern from Vitamins & Minerals fits here.
4. **Part 03: Exercise**
   - Benefits.
   - Acceptable vs avoid (`.cmp2`).
   - The 10 warning signs to stop (numbered grid).
   - 2 slides.
5. **Practices to avoid**: dieting, smoking (↓ B12/C/folate/zinc, ↑ iron needs), caffeine, drugs.
   "Drugs:" is empty in the source, so keep it as a write-in `.f`. 1 slide.
6. **Part 04: Complications**
   - GDM (definition, risk factors, MNT).
   - Oxidative stress → endothelial dysfunction chain → antioxidants.
   - Pre-eclampsia triad.
   - Morning sickness strategies.
   - Constipation.
   - Heartburn.
   - About 6 slides.
7. **Arabic table: Complaint / حلول غير دوائية** (RTL, `.ar`, `.gf`)
   - Pica, Nausea/Vomiting (8 tips incl. B6 25 mg × 3, ginger), Hyperemesis (3 situations, IV fluids, Saline + KCl + Thiamine).
   - Constipation, Heartburn, Flatulence, Lactose intolerance.
   - Anaemia (write-in "لو ظهرت أعراض نقص الحديد ......" + iron foods + RDA).
   - About 4 slides.
8. **Part 05: Lactation**
   - Energy (700–800 kcal for milk, +500 kcal) + requirements (1.5 g/kg protein, 45–65 % CHO, Omega 3, 14 cups).
   - Onion & garlic note.
   - Weight loss (0.5 kg/week safe, quality vs quantity).
   - Micronutrients ↑ chips.
   - Breastfeeding benefits for the child / for the mother (AR, two columns).
   - Herbs that increase milk (fennel, fenugreek, caraway, lentil soup) + "+450 / +300 kcal".
   - About 5 slides.

## Slide plan, deck 2: Childhood Nutrition (about 16 slides + covers)

1. **Part 01: Childhood obesity**
   - Definitions + "obese child > 20 % of normal average weight".
   - Normal weight formulas (2 `.dz` formula tiles).
   - Classification: Exogenous (10 causes, chips) vs Endogenous (genetics 80 % / 40 % `.st` tiles, endocrine: hypothyroid, Cushing).
   - Hazards (10, grid with icons).
   - History (6 questions; keep "○ yes ○ no").
   - Assessment + clinical exam + Lab (5).
   - Daily caloric split (45–65 / 25–35 / 10–20 %, bars).
   - Nutrition guidance (5) + activity guidance.
   - **Stages of weight management I / II / III** (Goals · Strategy · Method).
     The PDF table extracts jumbled, so rebuild it from the rendered page. It needs one table slide, maybe two.
   - About 10 slides.
2. **Part 02: Short stature**
   - Facts (familial & malnutrition, 20 % of Egyptian children, associations).
   - Rate of growth: birth 46–54 cm, +25 / +12 cm, 4–6 cm/yr, puberty girls 9 / boys 10.3 cm/yr.
     A `.trk2` bar chart or step tiles fit here.
   - Nutrient needs (CHO / Fat with write-in blank / Protein).
   - **Vitamins & minerals table** (Vit D, E, A, Mg, Iodine, Zinc, Calcium × Source / Sign of deficiency).
     It looks empty in the source, so keep it as a **student write-in table**.
   - إرشادات: 6 Arabic tips (RTL `.gf.ls`).
   - About 6 slides.

## Content corrections

### A. Clear typos and units: fix and report (precedent: lectures 1, 5, 6)

**Pregnancy**
- Protein **1.2–1.5 mg/kg → g/kg**.
- Vitamin A **RDA 750 mg → mcg (µg RAE)**.
- GDM risk factors skip "3-": "2-Obesity **3-**Complications in previous pregnancies 4-Family history".
- Nutrient numbering repeats **4** (Vitamins = 4, Calcium & Vit D = 4). Renumber Calcium → 5 … Vit A → 11, or drop the numbers.
- Ginger "in doses of **gram** a day for 4 days" is missing the number. It should be **1 gram/day for 4 days** (Vutyavanich 2001, *Obstet Gynecol*).
- Spelling:
  - Salamon → Salmon, Mackreal → Mackerel
  - Die → Diet, Proplem → Problem
  - tracet → tract, delivary → delivery
  - Requirment → Requirement, noemally → normally
  - Rickett's → Rickets

**Childhood**
- **Snakes → Snacks** (twice: "Snakes ○ yes ○ no", "what kind of snake?").
- Spelling:
  - noemal → normal, Pediarition → Pediatrician
  - Protiens → Proteins, beverges → beverages
  - deserts → desserts, Caloriec → Caloric
  - Defficincy → Deficiency, Pyberty → Puberty
  - potatos → potatoes, Zink → Zinc
  - "physical in activity" → physical inactivity
- Boys' pubertal growth "10.30 cm/year" → **10.3 cm/year**.

### B. Outdated numbers: correct with an on-slide `.ref` (precedent: Vit D 600 IU, Folic 400 mcg)

All values are pregnancy RDAs from the NIH ODS fact sheets / IOM DRIs. The source mostly gives the 14–18 y value.

| Source says | Adult (19–50 y) | Suggested on-slide text |
|---|---|---|
| Iron **30 mg** (AR anaemia row) | **27 mg** (30 mg was the 1989 RDA) | 27 mg/day |
| Zinc **12 mg** | **11 mg** (12 mg is ≤ 18 y) | 11 mg (12 mg ≤ 18 y) |
| Vit C **80 mg** | **85 mg** (80 mg is ≤ 18 y) | 85 mg (80 mg ≤ 18 y) |
| Vit A **750** | **770 µg RAE** (750 is ≤ 18 y) | 770 µg (750 µg ≤ 18 y) |

If iron changes to 27 mg, the "(3 mg Abs)" beside it becomes ≈ 2.7 mg. Keep it as "≈ 3 mg absorbed".

### C. Flag to Adham / Dr. El-Khateeb (don't change without confirmation)

1. **"Blood volume increases 20 %"** sits next to "Plasma volume increases 50 %". Total blood volume rises about 40–50 %.
   The 20 % figure is the **red-cell mass** rise, which is what causes the hemodilution on the same slide.
   Suggest "Red cell mass ↑ 20 %".
2. **Lactation energy is inconsistent inside the source.** It says "+500 kcal/day during the first 6 months", then "+450 kcal (1st 6 m) / +300 kcal (2nd 6 m)" at the end.
   The IOM figures are +330 / +400 kcal from the diet, with about 170 kcal coming from fat stores.
3. **Child weight formula, 1–5 y: (age + 5) × 2** gives 12 kg at age 1. The standard APLS formula is **(age + 4) × 2**.
   The 5–12 y formula "age × 4" also runs high above about 8 y.
4. Short-stature tip "الخميرة البيرة يومياً مع معلقة عسل … مهم جداً للنمو" is not evidence-based. Keep it, but mention it.
5. Weight-loss pace for older children: the source says ≤ ½ kg/week, while AAP 2007 allows up to about 1 kg/week. Keeping the stricter figure is fine; just noting the difference.

## Photos and modesty

- Run `pdfimages -j` on both PDFs and **use every source photo**, as the rule requires.
- Before using a photo, **check it against the modesty rule** ([[modest-imagery-rule]]). Pregnancy stock art often shows uncovered women.
  If a source photo breaks the rule, ask Adham rather than silently dropping or cropping it, because it conflicts with the "use every photo" rule.
- For added Unsplash photos, use food, hands-only and objects (prenatal vitamins, fish, leafy greens, milk, ginger, fennel/fenugreek seeds, measuring tape, growth chart). Avoid photos of women's bodies.
- No verse page. Run `fillcheck`. Check that `pdfinfo` Pages equals the `<section>` count.
