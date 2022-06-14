// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;400;500&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 1200px) {\n  html {\n    font-size: 58%;\n  }\n}\n@media only screen and (max-width: 995px) {\n  html {\n    font-size: 55%;\n  }\n}\n@media only screen and (max-width: 900px) {\n  html {\n    font-size: 52%;\n  }\n}\n\n.drawer {\n  display: flex;\n  align-items: center;\n  flex-flow: column nowrap;\n  overflow: hidden;\n  font-family: \"Noto Sans\", sans-serif;\n}\n.drawer__create-btn {\n  width: 16rem;\n  height: 5rem;\n  border-radius: 5rem;\n  border: none;\n  margin: 2rem 0;\n  background-color: #e6a770;\n  color: #fff;\n  font-size: 2rem;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s;\n}\n.drawer__create-btn:hover {\n  box-shadow: 0px 16px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n.drawer__create-btn:active {\n  outline: none;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(0.5rem);\n  cursor: pointer;\n}\n.drawer__event-filters {\n  margin: 0 0 0 1rem;\n  font-size: 1.5rem;\n  color: #333333;\n  width: 90%;\n}\n.drawer__event-filters > h3 {\n  margin: 4rem 0 1rem 0;\n}\n.drawer__filters {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-evenly;\n}\n.drawer__filters > div {\n  display: flex;\n  align-items: center;\n  margin: 0.8rem 0;\n}\n.drawer__filters > div > span:nth-child(1) {\n  display: inline-block;\n  width: 2.4rem;\n  height: 2.4rem;\n  border: 1px solid currentColor;\n  border-radius: 4px;\n  margin-right: 1rem;\n}\n.drawer__filters > div > span:nth-child(1):hover {\n  cursor: pointer;\n}\n.drawer__filters > div > span:nth-child(2) {\n  display: inline-block;\n  font-size: 1.4rem;\n  font-weight: 400;\n}\n.drawer__filters > div > span:nth-child(2):hover {\n  cursor: default;\n}\n.drawer .add-background-color {\n  background-color: currentColor;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}