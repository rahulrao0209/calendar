export type monthData = {
    day: number,
    dayName: string,
    monthName: string,
    year: number
}

export type Data = {
    data: monthData[]
}

export type NavProps = {
    data: monthData[],
    setData: React.Dispatch<React.SetStateAction<monthData[]>>
}