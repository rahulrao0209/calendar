import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import type { monthData } from "./types/interfaces";
import { getMonthData } from "./utils/getMonthData";

export const App = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [data, setData] = useState<monthData[]>([]);

    useEffect(() => {
      setData(getMonthData(month));
    }, [month]);

    return (
        <div>
           <Header
             data={data}
             setMonth={setMonth}
          />
        </div>
    )
};