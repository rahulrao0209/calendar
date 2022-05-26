export const deleteEvent = (events, event) => {
  const newEventList = events?.filter((item) => !(item.title === event.title));
  return newEventList;
};
