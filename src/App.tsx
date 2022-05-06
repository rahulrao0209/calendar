import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Calendar } from "./components/Calendar/Calendar";
import type { monthData } from "./types/interfaces";

export const App = () => {
    const [data, setData] = useState<monthData[]>([]);

    return (
        <div>
           <Header data={data} setData={setData}/>
           <Calendar data={data} />
        </div>
    )
};