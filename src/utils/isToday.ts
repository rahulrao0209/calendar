import type { monthData } from "../types/types";

export const isToday = (data: monthData) => {
    // Today
    const [dayName, monthName, day, year] =  new Date().toDateString().split(" ");
    const currentDay = Number(day);
    const currentYear = Number(year);

    return data.day === currentDay && data.dayName === dayName && data.monthName === monthName && data.year === currentYear;
}