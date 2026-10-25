# מתמטיקה לכיתה יא׳ · Math for Grade 11 (5 units)

A static website of study and practice pages in mathematics for 11th-grade students in Israel at the 5-unit (5 יחידות לימוד) level, following the Israeli Ministry of Education curriculum.

The pages are in Hebrew (right-to-left). Each page explains one topic in depth — the meaning of the topic, the formulas and where they come from, solution methods and common mistakes — and then gives graded practice questions with full, hidden solutions.

## Viewing the site

- **Locally:** open `index.html` in any browser. No build step, server or installation is needed. Formulas are typeset by KaTeX, which loads from a CDN, so an internet connection is needed for them to display.
- **Online:** the repository is set up for GitHub Pages. When Pages is enabled for the `main` branch, the site is served at `https://ofernarkis10.github.io/math11grade/`.

`index.html` is the whole navigation of the site, in one file. It holds the list of every topic and document (the `TOPICS` data at the bottom of the file) and shows one view at a time, chosen by the part of the URL after `#`:

- `index.html` — the home page: one card per topic, plus a card for the homework list.
- `index.html#<topic-id>` — one topic (for example `#sequences`): its documents in order, with a short description of each, and links to the previous and next topic.
- `index.html#homework` — every homework on the site, grouped by topic.
- `index.html#q=<text>` — search results: every document, from all topics, whose title or description contains the text. The search box at the top of every view searches as you type; it ignores niqqud, geresh/gershayim and quote marks, and highlights the matches. It searches only the titles and descriptions, not the content of the pages.

## Contents

| Topic | File | Description |
|---|---|---|
| Curriculum | `curriculum-5units-grade10-11.html` | Reference: the 5-unit syllabus for grades 10–11, by subject |
| Glossary | `glossary.html` | Reference: all 111 terms used on the site, by topic, with definitions, formulas, English names, links to the pages that use them, and a search box |
| Homework | `index.html#homework` | List of every homework / assignment on the site, grouped by topic, built automatically from the documents marked `homework:true` |
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
| Trigonometric functions | `trigonometry-00-unit-circle.html` | Explanation: what sine and cosine are on the unit circle — measuring an angle, the point (cos α, sin α), link to the right triangle, special values, signs by quadrant and range; interactive lab and 13 questions with the thinking behind each solution |
| | `trigonometry-01-polar-wheel.html` | Explanation: polar coordinates (degrees), sin and cos for any angle, a point on a standing and on a moving wheel, angular velocity, and the guiding question (speed of a point on a rolling wheel); interactive simulations |
| | `trigonometry-02-linear-vs-wheel.html` | Explanation: linear motion from A to B and motion on a wheel solved with the same five steps (data, the path equation: line y = mx + b or circle, the parameter from the time, x from the parameter, y by substituting x in the path equation), with a figure of the path for every example; parallel term map, a side-by-side simulation and four pairs of parallel solved examples |
| | `trigonometry-03-wheel-exercises.html` | 21 graded wheel problems with full solutions, up to the speed of a point on a rolling wheel relative to the ground |
| | `trigonometry-04-linear-vs-wheel-exercises.html` | 4 pairs of parallel questions (a straight line beside a wheel) for page 02, solved with the same five steps; folding solutions with a figure of the path |
| | `trigonometry-05-wheel-homework.html` | Homework to hand in: 12 questions on a point on a rotating wheel (position after a time; inverse and combined questions), questions only, print-ready |
| | `trigonometry-06-radians.html` | Explanation: radians (arc equal to the radius), 180° = π and converting degrees ↔ radians, fractions of a circle; the main table of all multiples of 30° and 45° with radians, quadrant and exact cos and sin, all angles on one circle, an interactive lab, how to remember the table, DEG/RAD calculator mode; 12 questions with the thinking behind each solution |
| Analytic geometry: equations of curves | `analytic-00-overview.html` | Overview: what the equation of a curve means, the five curves as loci, conic sections, one definition for all by focus, directrix and eccentricity (interactive lab), recognizing a curve from Ax² + Cy² + Dx + Ey + F = 0, summary table |
| | `analytic-01-line.html` | The line: slope and m = tan α, y = mx + b (lab), other forms, parallel and perpendicular lines, intersection, distance from a point to a line |
| | `analytic-02-circle.html` | The circle: derivation, meaning of a, b, R (lab), general form and completing the square, point vs circle, line and circle (lab), tangent |
| | `analytic-03-parabola.html` | The parabola: focus and directrix (lab), y² = 2px, meaning of p, four orientations, link to y = ax², shifting, reflective property |
| | `analytic-04-ellipse.html` | The ellipse: sum of distances (lab), x²/a² + y²/b² = 1, a² = b² + c², squashed circle, vertical ellipse, eccentricity, completing the square |
| | `analytic-05-hyperbola.html` | The hyperbola: difference of distances (lab), x²/a² − y²/b² = 1, auxiliary rectangle and asymptotes, conjugate hyperbola, rectangular hyperbola and y = k/x, completing the square |
| Units and motion equations | `units-00-overview.html` | Group overview: reading order, links to all pages, key formulas with the units of each term |
| | `units-01-quantities-and-units.html` | Quantities and units: base and derived units, prefixes, multiplying, dividing and cancelling units like variables, adding only like units |
| | `units-02-unit-conversion.html` | Unit conversion: multiplying by one, km/h ↔ m/s (÷3.6), squared and cubed units, acceleration, conversion chains |
| | `units-03-motion-equations.html` | Motion equations: x = vt and the three constant-acceleration equations, unit check of every term, link to the derivative, checking a formula by its units |
| | `units-04-solving-with-units.html` | Solving with units: five-step method, quadratic equation in time, meeting and chase problems, rates, sanity checks |
| | `units-05-workbook.html` | Workbook: 30 questions in four parts (basic, practice, exam level, circular motion), full solutions with units cancelled in every line, progress ticks |
| | `units-06-circular-motion.html` | Circular motion: the radian as a dimensionless unit, angular velocity ω, period, frequency and rpm, v = ωr and why rad/s × m = m/s, same ω vs same v (rigid body, belt, gears), centripetal acceleration, x = r cos(ωt), rolling wheel |
| | `units-07-force-to-distance.html` | From force to distance: F = ma and the newton, integrals from acceleration to velocity to position (antiderivative and area under the graph), derivatives back to the force, units × s forward and ÷ s back, time-varying force, summary table |
| | `units-08-pool-filling.html` | Pool filling, parallel to page 07: volume (m³, L), flow rate and its conversions, filling time and rate of rise of the water, flow rate as the derivative of volume and volume as its integral, changing and net flow rate, comparison table with motion |
| | `units-09-equations-sheet.html` | Printable equations sheet (one A4 page, no exercises): linear motion and circular motion side by side with units, the bridge s = rθ, v = ωr and centripetal acceleration, conversions and unit rules |
| | `units-10-simulators.html` | Three interactive simulators: linked velocity–time and distance–time graphs (area under v(t) accumulates to the distance, the tangent slope of x(t) is the velocity; sliders, play, a car on a road, negative velocity), the area as a sum of rectangles approaching the integral, and a five-segment velocity builder with its piecewise-linear distance graph |
| | `units-11-pool-simulators.html` | Pool simulators, parallel to page 10: linked flow-rate–time and volume–time graphs (area under Q(t) accumulates to the volume, the tangent slope of V(t) is the flow rate; presets for a steady tap, a tap opening or closing, filling then draining, and a water meter), the volume as a sum of rectangles Q·Δt, and a five-segment flow-rate builder including a draining pump |

## Structure of a study page

Most study pages combine explanation and practice. A topic can also split them into an explanation page and a separate exercises page (as in the derivatives topic). Every page follows the same layout:

1. **Back link** to the topic's view on the home page (`index.html#<topic-id>`) and a header with the topic name.
2. **Table of contents** for the page.
3. **Explanation:** meaning, formulas, derivations, worked examples and common mistakes.
4. **Practice in three levels:** רמה א׳ (basic), רמה ב׳ (consolidation) and רמה ג׳ (matriculation / בגרות level).
5. **Hidden solutions:** each question has a "הצג פתרון" (show solution) toggle, built with `<details>`, so students try first and check afterwards. When a page is printed, all solutions are shown.

## Rule: every solution explains how it is solved

**This rule applies to the whole site.** Every solution to every question, on every page and at every level (including matriculation level), must include a detailed explanation of how the question is solved, not only the final answer:

- **דרך החשיבה (the thinking):** how to recognise what is asked and what is given, which formula, rule or theorem fits and why, and what to watch out for (units to convert, values to reject, special cases).
- **Numbered steps:** each step with a short bold label (for example נתונים, נוסחה, הצבה, חישוב, בדיקה) and the full working, with units where relevant.
- **תשובה (answer):** the final answer on its own line.
- **A check** of the answer whenever there is a natural one (another method, substitution back, a sanity check of the number).

The composite-derivatives exercises (`composite-derivatives-02-exercises.html`) and the units workbook (`units-05-workbook.html`) are reference examples of this structure. Pages written before this rule should be brought up to it when they are next edited. Homework pages are published without solutions, as before (see below).

## Rule: every homework is also listed in the homework list

**This rule applies to the whole site.** Every homework (עבודת בית) and assignment must appear both in the list of its own topic and in the homework list (`index.html#homework`). This happens automatically: when you add the homework's line to its topic in the `TOPICS` data in `index.html`, mark it with `homework:true`. The homework list, its numbering and its counts (on the list and on the home-page card) are computed from these marks, so there is nothing else to update.

## Building and updating index.html

`index.html` is the only navigation file of the site. These rules apply every time it is created or changed.

### Principles

1. **One file for all lists.** Every list of documents (home page, topic lists, homework list, search results) is shown by `index.html`. Do not create separate list pages such as `topic-<id>.html`.
2. **Data and code are separate.** The content is in one place: the `TOPICS` data in the `<script>` at the bottom of the file. The code under it builds every view from that data. Adding, changing or removing a document means editing `TOPICS` only; the code is changed only when the behaviour of the site changes.
3. **Each document is listed once.** A document has exactly one line in `TOPICS`, inside its topic. Every other place it appears (the homework list, search results, counts on the cards) is computed from that line, never copied by hand.
4. **Search covers only the lists.** The search looks in the title (`t`) and description (`d`) of each document and in the topic name, not in the content of the pages. Whatever should be findable must be written in the title or the description.

### Views

The part of the URL after `#` chooses the view:

| URL | View |
|---|---|
| `index.html` | Home page: introduction, the "about" boxes and one card per topic, plus the homework card |
| `index.html#<topic-id>` | One topic: title, lead, count, its documents in order, previous/next topic links |
| `index.html#homework` | Every document marked `homework:true`, grouped by topic, numbered 01, 02, … across the whole list |
| `index.html#q=<text>` | Search results from all topics, grouped by topic, with the matches highlighted |

`homework` and `q` are reserved and must never be used as a topic id. Any other or unknown value after `#` shows the home page. The homework list sits after the glossary in the order of the cards and of the previous/next links (set by `CHAIN` in the code).

### The data: topics

Topics are listed in `TOPICS` in the order of study; this order is the order of the cards and of the previous/next links.

| Field | Meaning | Rules |
|---|---|---|
| `id` | Topic id, used in the URL (`#sequences`) and in the back links of the topic's pages | Lowercase English letters and hyphens. The same as the file-name prefix of the topic's pages. **Never change it after it is published**: the pages, bookmarks and shared links depend on it |
| `title` | Topic name, in Hebrew | Shown on the card, as the title of the topic view and in search groups. It is also searched |
| `count` | Summary under the title, for example `"10 דפים · 297 שאלות"` | Written by hand. **Update it whenever a document is added or removed, or a question count changes** |
| `desc` | Text of the card on the home page | One or two short sentences |
| `lead` | Text under the title of the topic view | May be longer than `desc` |
| `items` | The topic's documents | See below |

### The data: documents

Each document is one entry in its topic's `items`, in the order of study:

| Field | Meaning | Rules |
|---|---|---|
| `no` | Number shown beside the title | Two digits as a string (`"03"`), equal to the `NN` in the file name |
| `href` | The file | File name relative to the site root. A `.pdf` opens in a new tab automatically |
| `t` | Title | Hebrew, as on the page itself. Searched |
| `q` | Chip on the right: the question count or the kind of page | `"12 שאלות"` for practice and homework (the homework total is calculated from the number before `שאלות`), otherwise a short label such as `"דף הסבר"`, `"דף סיכום"`, `"3 סימולטורים"` |
| `d` | Description | One to three sentences on what the page covers. Plain text; the only HTML allowed is math in `<span class="m">…</span>`. Searched (the text, not the math) |
| `homework` | `homework:true` marks a homework or assignment | Leave it out for any other page. See the rule on homework above |

### Writing the strings

- Every value is a JavaScript string in double quotes, and every entry ends with a comma. **A single missing comma or quote stops the whole page from showing**, so check the page after every change.
- Inside a string use the Hebrew marks ׳ (geresh) and ״ (gershayim), for example `"י״א"`, never a plain `"`. If a plain double quote is unavoidable, write it as `\"`.
- Do not use `&`, `<` or `>` outside a math span; write "ו" instead of `&`.
- Math inside `d`: the span's quotes are escaped and every backslash is doubled, because the text is inside a JavaScript string. Write `<span class=\"m\">\\(S_{n}\\)</span>` for \(S_{n}\). Copy an existing entry (for example `sequences-03-infinite-series.html`) as a model.

### Procedures

- **New page in an existing topic:** add its entry to the topic's `items` in its place, update the topic's `count`, and set the page's back link to `index.html#<topic-id>`.
- **New homework:** as a new page, plus `homework:true`. Nothing else: the homework list, its numbering and the counts on the homework card update themselves.
- **New topic:** add a topic block in its place in the order of study, with all six fields. The card, the topic view and the previous/next links of it and its neighbours are created automatically.
- **Renaming or moving a file:** update its `href` and every link to it in other pages (the glossary links to many pages).
- **Removing a page:** delete its entry and update the topic's `count`.
- **Changing the order:** move the entries; keep `no` equal to the number in the file name.
- **Back link on every page:** `<a class="back" href="index.html#<topic-id>">→ חזרה לנושא: <topic title></a>`.

### Check after every change

1. Open `index.html` and see that the page appears (a blank page means a syntax error in `TOPICS`: look for a missing comma or quote).
2. Check the topic's card and count on the home page, and the new entry in the topic view.
3. For homework: open `index.html#homework` and check the new entry and the total.
4. Search for a word from the new description and see that the entry is found.
5. Open the new page and click its back link: it must return to the topic view.

## Repository layout

```
math11grade/
├── index.html                          all navigation: home page, topic lists (#<topic-id>), homework list (#homework) and search (#q=…); topic ids: curriculum, glossary, summer-work, sequences, composite-derivatives, geometry, trigonometry, analytic, units
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
├── trigonometry-NN-<name>.html          trigonometric functions (00 unit circle, 01 polar coordinates & the wheel, 02 linear vs wheel, 03 wheel exercises, 04 linear-vs-wheel exercises, 05 wheel homework, 06 radians and the table of special angles)
├── analytic-NN-<name>.html              analytic geometry: equations of curves (00 overview, 01 line, 02 circle, 03 parabola, 04 ellipse, 05 hyperbola); figures drawn in SVG by a small inline script, with interactive labs
├── units-NN-<name>.html                 units and motion equations (00 overview, 01 quantities, 02 conversion, 03 motion equations, 04 solving with units, 05 workbook, 06 circular motion, 07 force to distance, 08 pool filling, 09 equations sheet, 10 simulators, 11 pool simulators)
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
5. **Register the page in `index.html`**: add its entry to `TOPICS` and set its back link, following [Building and updating index.html](#building-and-updating-indexhtml).
6. **Write every solution with a detailed explanation**, following the rule above: the thinking, numbered steps, the answer and a check.
7. **Commit and push** to `main`.

## Answer keys and tests

Solutions to homework and all tests are kept **outside this repository**, in a private folder next to it, so students cannot see them on GitHub or on the published site. Never add them to this folder.

## License

The content is released under [CC0 1.0 Universal](LICENSE). It may be freely copied, adapted and used for teaching.

## Note

The division of topics between exam papers (שאלונים) and school years may change. Check against the current Ministry of Education curriculum.
