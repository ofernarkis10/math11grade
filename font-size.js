/* Text-size control shared by every page of the site.
   Adds a small floating panel (smaller / reset / larger) and remembers the
   chosen size across pages and visits. Include in <head>:
   <script src="font-size.js"></script> */
(function () {
  var KEY = 'math11grade-text-size';
  var STEPS = [0.85, 1, 1.15, 1.3, 1.5, 1.75, 2];
  var root = document.documentElement;

  function load() {
    try { var v = parseFloat(localStorage.getItem(KEY)); if (STEPS.indexOf(v) > -1) return v; } catch (e) {}
    return 1;
  }
  function save(v) { try { localStorage.setItem(KEY, String(v)); } catch (e) {} }

  var size = load();
  root.style.setProperty('--text-zoom', size);

  var css = document.createElement('style');
  css.textContent =
    'html{font-size:calc(100% * var(--text-zoom,1))}' +
    'html.fs-ready body{font-size:calc(var(--fs-base,17px) * var(--text-zoom,1))}' +
    '.fs-ctl{position:fixed;right:16px;bottom:16px;z-index:50;display:flex;align-items:center;gap:2px;direction:rtl;' +
      'background:var(--paper,#fff);border:1px solid var(--line,#d9dfe6);border-radius:99px;padding:3px;' +
      'box-shadow:0 2px 8px rgba(0,0,0,.18);font-family:var(--f-body,Arial,sans-serif)}' +
    '.fs-ctl button{all:unset;cursor:pointer;min-width:34px;height:34px;border-radius:99px;display:grid;place-items:center;' +
      'color:var(--accent,#1f6f8b);font-weight:700;line-height:1;padding:0 6px;box-sizing:border-box}' +
    '.fs-ctl button:hover{background:var(--accent-soft,#e3f0f5)}' +
    '.fs-ctl button:focus-visible{outline:2px solid var(--accent,#1f6f8b);outline-offset:1px}' +
    '.fs-ctl button[disabled]{opacity:.35;cursor:default;background:none}' +
    '.fs-ctl .fs-sm{font-size:14px}.fs-ctl .fs-lg{font-size:20px}' +
    '.fs-ctl .fs-val{font-size:13px;color:var(--muted,#5b6878);min-width:46px;font-variant-numeric:tabular-nums}' +
    '@media print{.fs-ctl{display:none}}';
  (document.head || root).appendChild(css);

  var ctl, bDown, bUp, bVal;
  function render() {
    root.style.setProperty('--text-zoom', size);
    if (!ctl) return;
    var i = STEPS.indexOf(size);
    bDown.disabled = i <= 0;
    bUp.disabled = i >= STEPS.length - 1;
    bVal.textContent = Math.round(size * 100) + '%';
  }
  function step(d) {
    var i = STEPS.indexOf(size) + d;
    if (i < 0 || i >= STEPS.length) return;
    size = STEPS[i]; save(size); render();
  }
  function btn(cls, text, label, fn) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = cls; b.textContent = text;
    b.setAttribute('aria-label', label); b.title = label;
    b.addEventListener('click', fn);
    return b;
  }
  function build() {
    /* remember each page's own body text size, then scale it */
    root.style.setProperty('--fs-base', getComputedStyle(document.body).fontSize);
    root.classList.add('fs-ready');
    ctl = document.createElement('div');
    ctl.className = 'fs-ctl';
    ctl.setAttribute('role', 'group');
    ctl.setAttribute('aria-label', 'גודל טקסט');
    bUp = btn('fs-lg', 'א+', 'הגדלת טקסט', function () { step(1); });
    bVal = btn('fs-val', '100%', 'איפוס גודל טקסט', function () { size = 1; save(size); render(); });
    bDown = btn('fs-sm', 'א−', 'הקטנת טקסט', function () { step(-1); });
    ctl.appendChild(bUp); ctl.appendChild(bVal); ctl.appendChild(bDown);
    document.body.appendChild(ctl);
    render();
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);

  /* print at the page's normal size */
  window.addEventListener('beforeprint', function () { root.classList.remove('fs-ready'); root.style.setProperty('--text-zoom', 1); });
  window.addEventListener('afterprint', function () { root.classList.add('fs-ready'); render(); });

  /* keep other open tabs of the site in sync */
  window.addEventListener('storage', function (e) {
    if (e.key === KEY) { size = load(); render(); }
  });
})();
