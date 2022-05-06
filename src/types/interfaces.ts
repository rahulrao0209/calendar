export interface monthData {
    day: number,
    dayName: string,
    monthName: string,
    year: number
}

export interface Data {
    data: monthData[]
}

export interface NavProps {
    data: monthData[],
    setData: React.Dispatch<React.SetStateAction<monthData[]>>
}