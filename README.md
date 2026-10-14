# מתמטיקה לכיתה יא׳ · Math for Grade 11 (5 units)

A static website of study and practice pages in mathematics for 11th-grade students in Israel at the 5-unit (5 יחידות לימוד) level, following the Israeli Ministry of Education curriculum.

The pages are in Hebrew (right-to-left). Each page explains one topic in depth — the meaning of the topic, the formulas and where they come from, solution methods and common mistakes — and then gives graded practice questions with full, hidden solutions.

## Viewing the site

- **Locally:** open `index.html` in any browser. No build step, server or installation is needed. Formulas are typeset by KaTeX, which loads from a CDN, so an internet connection is needed for them to display.
- **Online:** the repository is set up for GitHub Pages. When Pages is enabled for the `main` branch, the site is served at `https://ofernarkis10.github.io/math11grade/`.

`index.html` is the home page. It lists every document, grouped by topic, and starts with a table of contents that jumps to each main topic.

## Contents

| Topic | File | Description |
|---|---|---|
| Curriculum | `curriculum-5units-grade10-11.html` | Reference: the 5-unit syllabus for grades 10–11, by subject |
| Glossary | `glossary.html` | Reference: all 111 terms used on the site, by topic, with definitions, formulas, English names, links to the pages that use them, and a search box |
| Summer work | `summer-work-grade10-5units.pdf` | PDF: summer assignment given at the end of grade 10 (29 questions: polynomials, rational functions, geometry without circles, composite functions), with links to answers |
| | `summer-work-geometry-solutions.html` | Worked solutions to the 10 geometry questions of the summer work, with the theorems used in each step |
| | `summer-work-calculus-solutions.html` | Worked solutions to the 14 calculus questions of the summer work (polynomials and rational functions), with sign tables and graphs |
| Sequences | `sequences-00-overview.html` | Overview of all sequence types |
| | `sequences-01-arithmetic.html` | Arithmetic sequences |
| | `sequences-02-geometric.html` | Geometric sequences |
| | `sequences-03-infinite-series.html` | Infinite convergent geometric series |
| | `sequences-04-recursive.html` | Recursively defined sequences |
| | `sequences-05-general-term.html` | Sequences given by a general-term formula |
| | `sequences-06-mixed.html` | Mixed and combined sequences |
| | `sequences-07-induction.html` | Mathematical induction |
| | `sequences-08-summary-table.html` | Summary table: one row per sequence type, with the same columns for all (definition, recursion, general term, sum, three consecutive terms, monotonicity, how to prove, finding n, common mistakes) |
| | `sequences-09-homework.html` | Homework to hand in: 60 consolidation-level questions (20 arithmetic, 20 geometric, 20 infinite series), questions only, print-ready |
| Derivatives of composite functions | `composite-derivatives-01-rules.html` | The chain rule and the rules derived from it, with worked examples |
| | `composite-derivatives-02-exercises.html` | 42 graded exercises with full solutions |
| Euclidean geometry | `geometry-01-loci-triangle-centers.html` | Deductive reasoning, loci, the four special points of a triangle, fourth congruence theorem, converse of Pythagoras |
| | `geometry-02-circle.html` | The circle: chords, arcs, inscribed and central angles, cyclic quadrilaterals, tangents, constructions |
| | `geometry-03-similarity.html` | Proportion and similarity: Thales, similarity theorems, angle-bisector theorem, similarity in right triangles and in the circle |

## Structure of a study page

Most study pages combine explanation and practice. A topic can also split them into an explanation page and a separate exercises page (as in the derivatives topic). Every page follows the same layout:

1. **Back link** to `index.html` and a header with the topic name.
2. **Table of contents** for the page.
3. **Explanation:** meaning, formulas, derivations, worked examples and common mistakes.
4. **Practice in three levels:** רמה א׳ (basic), רמה ב׳ (consolidation) and רמה ג׳ (matriculation / בגרות level).
5. **Hidden solutions:** each question has a "הצג פתרון" (show solution) toggle, built with `<details>`, so students try first and check afterwards. When a page is printed, all solutions are shown. In the sequences pages, every solution in the first two levels (and every exercise on the overview page) also has a **הסבר מפורט** (detailed explanation) box: what is given, which formula to use and why, the computation, and a check. Matriculation-level solutions stay concise.

## Repository layout

```
math11grade/
├── index.html                          home page: table of contents + list of all documents
├── curriculum-5units-grade10-11.html   curriculum reference
├── glossary.html                       glossary of every term used on the site
├── summer-work-grade10-5units.pdf    summer assignment from the end of grade 10 (PDF)
├── summer-work-geometry-solutions.html  worked solutions to the summer-work geometry questions
├── img/summer-geometry/              figures for the geometry solutions page
├── summer-work-calculus-solutions.html  worked solutions to the summer-work calculus questions
├── img/summer-calculus/              graphs for the calculus solutions page
├── sequences-NN-<name>.html            sequences topic, pages 00–09
├── composite-derivatives-NN-<name>.html  derivatives of composite functions (01 rules, 02 exercises)
├── geometry-NN-<name>.html              Euclidean geometry (01 loci & triangle centers, 02 circle, 03 similarity)
├── font-size.js                       text-size control shown on every page
├── README.md
└── LICENSE                             CC0 1.0 Universal
```

Every page is a single self-contained HTML file: styles are inline, there is no JavaScript framework, and the only external resource is Google Fonts (Frank Ruhl Libre, Assistant, JetBrains Mono). Pages support light and dark mode automatically. The one shared file is `font-size.js`, which adds a text-size control (א− / 100% / א+, from 85% to 200%) to the bottom corner of every page; the chosen size is remembered across pages and visits in the same browser.

## Adding a new page

1. **Name the file** `<topic>-NN-<short-name>.html`, where `NN` is the page's order within its topic (`00` for an overview page).
2. **Copy the layout** of an existing study page (for example `composite-derivatives-01-rules.html`) so the design stays consistent: same `:root` color tokens, fonts, `section.ch` blocks, `ol.exercises` with `<details>` solutions, and the back link to `index.html`.
3. **Write math** in LaTeX inside `<span class="m">\( … \)</span>`, for example `<span class="m">\(S_{n} = \dfrac{n(a_{1} + a_{n})}{2}\)</span>`. The span keeps the formula left-to-right inside the Hebrew text, and [KaTeX](https://katex.org) typesets it in the browser. Copy the KaTeX block from the `<head>` of an existing page (stylesheet, two scripts and a short `<style>`). Use `\dfrac` for fractions in running text so they stay readable.
4. **Add the text-size control** by putting `<script src="font-size.js"></script>` just before `</head>`. Set the page's body text size in `px` on `body` and other sizes in `rem`/`em` so they all scale with it.
5. **Register the page in `index.html`:**
   - For an existing topic, add an `<li>` to that topic's `ul.docs`, with number, title, question count and a short description, and update the count in the topic's header.
   - For a new topic, add a new `<section class="topic" id="<topic-id>">` before the `<footer>`. The table of contents at the top of `index.html` is built automatically from these sections, so the new topic appears there without further changes.
6. **Commit and push** to `main`.

## Answer keys and tests

Solutions to homework and all tests are kept **outside this repository**, in a private folder next to it, so students cannot see them on GitHub or on the published site. Never add them to this folder.

## License

The content is released under [CC0 1.0 Universal](LICENSE). It may be freely copied, adapted and used for teaching.

## Note

The division of topics between exam papers (שאלונים) and school years may change. Check against the current Ministry of Education curriculum.
