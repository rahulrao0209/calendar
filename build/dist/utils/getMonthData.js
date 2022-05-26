export const getMonthData = (month = new Date().getMonth()) => {
  const date = new Date();
  const year = date.getFullYear();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstWeekdayOfMonth = new Date(year, month, 1).toLocaleDateString("en-us", {weekday: "short"});
  const noOfPreviousMonthDays = weekdays.indexOf(firstWeekdayOfMonth);
  const noOfCurrentMonthDays = new Date(year, month + 1, 0).getDate();
  const currentMonthDays = [];
  const previousMonthDays = [];
  for (let i = 0; i < noOfPreviousMonthDays; i++) {
    const previousMonthDate = new Date(year, month, 0 - i);
    const previousMonthDay = previousMonthDate.getDate();
    const previousYear = previousMonthDate.getFullYear();
    const [previousMonthName, previousDayName] = previousMonthDate.toLocaleDateString("en-in", {weekday: "short", month: "short"}).split(" ");
    previousMonthDays.push({
      day: previousMonthDay,
      dayName: previousDayName,
      monthName: previousMonthName,
      year: previousYear
    });
  }
  for (let i = 0; i < noOfCurrentMonthDays; i++) {
    const date2 = new Date(year, month, i + 1);
    const day = date2.getDate();
    const currentYear = date2.getFullYear();
    const [monthName, dayName] = date2.toLocaleDateString("en-in", {weekday: "short", month: "short"}).split(" ");
    currentMonthDays.push({
      day,
      dayName,
      monthName,
      year: currentYear
    });
  }
  return [...previousMonthDays, ...currentMonthDays];
};
