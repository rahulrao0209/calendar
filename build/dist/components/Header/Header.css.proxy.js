// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;400;500&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 1200px) {\n  html {\n    font-size: 58%;\n  }\n}\n@media only screen and (max-width: 995px) {\n  html {\n    font-size: 55%;\n  }\n}\n@media only screen and (max-width: 900px) {\n  html {\n    font-size: 52%;\n  }\n}\n\nbody {\n  font-family: \"Pacifico\", cursive;\n  font-size: 2.8rem;\n  font-weight: bold;\n}\n@media only screen and (max-width: 400px) {\n  body {\n    font-size: 2.4rem;\n  }\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  color: #333333;\n  padding: 0.8rem;\n  border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);\n}\n.header > span {\n  cursor: default;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}