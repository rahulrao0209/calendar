export interface monthData {
    day: number,
    dayName: string,
    monthName: string,
    year: number
}

export interface NavProps {
    data: monthData[],
    setMonth:  React.Dispatch<React.SetStateAction<number>>
}