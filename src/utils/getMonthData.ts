import type { monthData } from "../types/types";

export const getMonthData = (month = new Date().getMonth()) => {
    
    const date = new Date(); // Will always be today's date
    const year = date.getFullYear();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const firstWeekdayOfMonth = new Date(year, month, 1).toLocaleDateString('en-us', { weekday: 'short'});
    const noOfPreviousMonthDays = weekdays.indexOf(firstWeekdayOfMonth);

    // 0 as input for the day fetches the last day of the previous month
    const noOfCurrentMonthDays = new Date(year, month + 1, 0).getDate(); 

    const currentMonthDays: monthData[] = [];
    const previousMonthDays: monthData[] = [];
    
    //Collect all trailing days from the previous month
    for(let i = 0; i < noOfPreviousMonthDays; i++) {
        const previousMonthDate = new Date(year, month, 0 - i);
        const previousMonthDay = previousMonthDate.getDate();
        const previousYear = previousMonthDate.getFullYear();
        const [previousMonthName, previousDayName] = previousMonthDate.toLocaleDateString('en-in', {weekday: 'short', month: 'short'}).split(" ");

        previousMonthDays.push({
            day: previousMonthDay,
            dayName: previousDayName,
            monthName: previousMonthName,
            year: previousYear
        });
    }

    // Collect all month days
    for(let i = 0; i < noOfCurrentMonthDays; i++) {
        const date = new Date(year, month, i + 1);
        const day = date.getDate();
        const currentYear = date.getFullYear();
        const [monthName, dayName] = date.toLocaleDateString('en-in', {weekday: 'short', month: 'short'}).split(" ");

        currentMonthDays.push({
            day,
            dayName,
            monthName,
            year: currentYear
        })
    }

    return [...previousMonthDays, ...currentMonthDays];
}