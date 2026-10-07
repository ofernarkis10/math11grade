# מתמטיקה לכיתה יא׳ · Math for Grade 11 (5 units)

A static website of study and practice pages in mathematics for 11th-grade students in Israel at the 5-unit (5 יחידות לימוד) level, following the Israeli Ministry of Education curriculum.

The pages are in Hebrew (right-to-left). Each page explains one topic in depth — the meaning of the topic, the formulas and where they come from, solution methods and common mistakes — and then gives graded practice questions with full, hidden solutions.

## Viewing the site

- **Locally:** open `index.html` in any browser. No build step, server or installation is needed.
- **Online:** the repository is set up for GitHub Pages. When Pages is enabled for the `main` branch, the site is served at `https://ofernarkis10.github.io/math11grade/`.

`index.html` is the home page. It lists every document, grouped by topic, and starts with a table of contents that jumps to each main topic.

## Contents

| Topic | File | Description |
|---|---|---|
| Curriculum | `curriculum-5units-grade10-11.html` | Reference: the 5-unit syllabus for grades 10–11, by subject and hours |
| Sequences | `sequences-00-overview.html` | Overview of all sequence types |
| | `sequences-01-arithmetic.html` | Arithmetic sequences |
| | `sequences-02-geometric.html` | Geometric sequences |
| | `sequences-03-infinite-series.html` | Infinite convergent geometric series |
| | `sequences-04-recursive.html` | Recursively defined sequences |
| | `sequences-05-general-term.html` | Sequences given by a general-term formula |
| | `sequences-06-mixed.html` | Mixed and combined sequences |
| | `sequences-07-induction.html` | Mathematical induction |
| Derivatives of composite functions | `composite-derivatives-01-rules.html` | The chain rule and its derived rules, with 42 graded exercises |

## Structure of a study page

Every study page follows the same layout:

1. **Back link** to `index.html` and a header with the topic name.
2. **Table of contents** for the page.
3. **Explanation:** meaning, formulas, derivations, worked examples and common mistakes.
4. **Practice in three levels:** רמה א׳ (basic), רמה ב׳ (consolidation) and רמה ג׳ (matriculation / בגרות level).
5. **Hidden solutions:** each question has a "הצג פתרון" (show solution) toggle, built with `<details>`, so students try first and check afterwards. When a page is printed, all solutions are shown.

## Repository layout

```
math11grade/
├── index.html                          home page: table of contents + list of all documents
├── curriculum-5units-grade10-11.html   curriculum reference
├── sequences-NN-<name>.html            sequences topic, pages 00–07
├── composite-derivatives-NN-<name>.html  derivatives of composite functions
├── README.md
└── LICENSE                             CC0 1.0 Universal
```

Every page is a single self-contained HTML file: styles are inline, there is no JavaScript framework, and the only external resource is Google Fonts (Frank Ruhl Libre, Assistant, JetBrains Mono). Pages support light and dark mode automatically.

## Adding a new page

1. **Name the file** `<topic>-NN-<short-name>.html`, where `NN` is the page's order within its topic (`00` for an overview page).
2. **Copy the layout** of an existing study page (for example `composite-derivatives-01-rules.html`) so the design stays consistent: same `:root` color tokens, fonts, `section.ch` blocks, `ol.exercises` with `<details>` solutions, and the back link to `index.html`.
3. **Write math** inside `<span class="m">…</span>`. This sets the math font and keeps formulas left-to-right inside the Hebrew text. Use Unicode for symbols (`x²`, `aₙ`, `√`, `π`, `≤`, `⇒`).
4. **Register the page in `index.html`:**
   - For an existing topic, add an `<li>` to that topic's `ul.docs`, with number, title, question count and a short description, and update the count in the topic's header.
   - For a new topic, add a new `<section class="topic" id="<topic-id>">` before the `<footer>`. The table of contents at the top of `index.html` is built automatically from these sections, so the new topic appears there without further changes.
5. **Commit and push** to `main`.

## License

The content is released under [CC0 1.0 Universal](LICENSE). It may be freely copied, adapted and used for teaching.

## Note

The division of topics between exam papers (שאלונים) and school years may change. Check against the current Ministry of Education curriculum.
