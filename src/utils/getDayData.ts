import type { monthData } from "../types/types";

export const getDayData = (data = new Date().toDateString()) => {
    const [dayName, monthName, day, year] =  data.split(" ");

    const dayData: monthData = {
        dayName,
        monthName,
        day: Number(day),
        year: Number(year)
    }

    return dayData;
}