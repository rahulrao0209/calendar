import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { getMonthData } from "../../utils/getMonthData";
import { AuthContext } from "../../App";
import type { NavProps } from "../../types/types";
import "./Nav.scss";

export const Nav = ({ data, setData }: NavProps) => {
    
    const [month, setMonth] = useState(new Date().getMonth());
    const { loggedInUser, setLoggedInUser } =  useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      setData(getMonthData(month));
    }, [month]);

    useEffect(() => {
      if(!loggedInUser) navigate("/");
    }, [loggedInUser])

    const handleNext = () => {
        console.log("SET MONTH");
        setMonth(month + 1);
    }

    const handlePrev = () => {
        console.log("SET MONTH");
        setMonth(month - 1);
    }

    const setToday = () => {
        console.log("SET TODAY");
        setMonth(new Date().getMonth());
    }

    const handleLogout = () => {
        setLoggedInUser(undefined);
    }

    return (
        <div className="nav">
            <nav className="nav__left">
                <div className="nav__today" onClick={setToday}>Today</div>

                <div className="nav__controls">
                    <span className="nav__controls--previous" onClick={handlePrev}>
                        <IoCaretBack className="icon--prev" />
                    </span>
                    <span className="nav__controls--next" onClick={handleNext}>
                        <IoCaretForward className="icon--next"/>
                    </span>
                </div>

                <div className="nav__month">{data[data.length - 1]?.monthName} {data[data.length - 1]?.year}</div>
            </nav>

            <nav className="nav__right">
                <button className="nav__logout" onClick={handleLogout}>
                    Logout { loggedInUser?.firstname}
                </button>
            </nav>
        </div>
    )
}