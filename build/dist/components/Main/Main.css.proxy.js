// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".main {\n  display: grid;\n  grid-template-columns: 25rem 1fr;\n}\n\n.main--closed {\n  display: grid;\n  grid-template-columns: 0 1fr;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}