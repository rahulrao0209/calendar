// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;400;500&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 1200px) {\n  html {\n    font-size: 58%;\n  }\n}\n@media only screen and (max-width: 995px) {\n  html {\n    font-size: 55%;\n  }\n}\n@media only screen and (max-width: 900px) {\n  html {\n    font-size: 52%;\n  }\n}\n\n.calendar {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(5.5rem, 24rem));\n  grid-template-rows: repeat(5, minmax(16rem, 1fr));\n  grid-auto-rows: minmax(16rem, 1fr);\n  grid-gap: 0.5rem;\n  margin: 2rem 3rem;\n  font-family: \"Noto Sans\", sans-serif;\n}\n@media only screen and (max-width: 900px) {\n  .calendar {\n    grid-gap: 0.25rem;\n  }\n}\n.calendar__cell {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  border: 0.1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s;\n}\n.calendar__cell:hover {\n  cursor: pointer;\n  box-shadow: 0px 12px 8px rgba(0, 0, 0, 0.2);\n}\n.calendar__cell:active {\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(2.5px);\n}\n.calendar__day {\n  display: inline-block;\n  background-color: #e6a770;\n  border-radius: 8px 8px 0 0;\n  width: 100%;\n  text-align: center;\n  padding: 0.5rem;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: #fff;\n}\n.calendar__month {\n  font-size: 1.5rem;\n  font-weight: 400;\n  width: 2.6rem;\n  height: 2.6rem;\n  text-align: center;\n  border-radius: 100%;\n  margin-top: 0.5rem;\n}\n.calendar__event {\n  width: 90%;\n}\n.calendar__event > div {\n  font-size: 1.2rem;\n  font-weight: 400;\n  margin: 0.5rem 0;\n  padding: 0.1rem 0;\n  text-align: center;\n  border-radius: 4px;\n  background-color: #e2a601;\n  color: #fff;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}