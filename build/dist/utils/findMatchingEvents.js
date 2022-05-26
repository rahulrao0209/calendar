export const findMatchingEvents = (events, currentDay) => {
  const matchingEvents = events?.filter((event) => {
    return event.date.day === currentDay.day && event.date.monthName === currentDay.monthName && event.date.year === currentDay.year;
  });
  return matchingEvents;
};
