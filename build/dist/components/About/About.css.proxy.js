// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;400;500&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 1200px) {\n  html {\n    font-size: 58%;\n  }\n}\n@media only screen and (max-width: 995px) {\n  html {\n    font-size: 55%;\n  }\n}\n@media only screen and (max-width: 900px) {\n  html {\n    font-size: 52%;\n  }\n}\n\n.about {\n  padding: 0 1.5em;\n  text-align: center;\n  color: rgb(49, 49, 49);\n}\n.about > h1 {\n  margin: 0.8rem 0;\n}\n.about > p {\n  line-height: 1.6em;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}