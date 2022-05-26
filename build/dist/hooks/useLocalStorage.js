import {useEffect} from "../../_snowpack/pkg/react.js";
export const useLocalStorage = (eventList, setEventList) => {
  useEffect(() => {
    const savedEvents = localStorage.getItem("eventlist");
    if (typeof savedEvents === "string" && savedEvents != void 0 && savedEvents != "undefined") {
      console.log("saved events: ", JSON.parse(savedEvents));
      setEventList(JSON.parse(savedEvents));
    }
  }, []);
  useEffect(() => {
    if (eventList) {
      localStorage.setItem("eventlist", JSON.stringify(eventList));
    }
  }, [eventList]);
};
