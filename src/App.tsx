import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import type { monthData } from "./types/interfaces";
import { Main } from "./components/Main/Main";

export const App = () => {
    const [data, setData] = useState<monthData[]>([]);

    return (
        <div>
           <Header data={data} setData={setData}/>
           <Main data={data} />
        </div>
    )
};