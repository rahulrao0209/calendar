import React, { useEffect } from "react";
import type { DrawerProps } from "src/types/types";
import { getDayData } from "../../utils/getDayData";
import { CalendarMini } from "../CalendarMini/CalendarMini";
import "./Drawer.scss";

export const colorMap = new Map([
    ["#e2a601", "Yellow"],
    ["#dd5e89", "Pink"],
    ["#4389a2", "Green"],
    ["#fe8c00", "Orange"],
    ["#12d8fa", "Blue"],
])

export const Drawer = ({ data, eventColors, displayEventsByColor, setDisplayEventsByColor, setData, setShowModal, setEventDay }: DrawerProps) => {

    const { yellow, pink, green, orange, blue } = displayEventsByColor;
    
    const handleModal = () => { 
        setEventDay(getDayData());
        setShowModal(true); 
    }

    const handleClick = (event: React.BaseSyntheticEvent<MouseEvent>) => {
        const color: string = event.target.dataset.color;
        const colorName = colorMap.get(color)?.toLowerCase();

        switch(colorName) {
            case "yellow":
                setDisplayEventsByColor({ type: 'update-yellow', data: !yellow });
                return;
            case "pink":
                setDisplayEventsByColor({ type: 'update-pink', data: !pink });
                return;
            case "green":
                setDisplayEventsByColor({ type: 'update-green', data: !green });
                return;
            case "orange":
                setDisplayEventsByColor({ type: 'update-orange', data: !orange });
                return;
            case "blue":
                setDisplayEventsByColor({ type: 'update-blue', data: !blue });
                return;
            default:
                return;
        }
        
    }

    const createColorFilterComponent = (color: string) => {
        return (
            <div key={color}>
              <span data-color={color} style={{color: `${color}`}} className="filter-box add-background-color"></span> <span>{ colorMap.get(color) } </span>
            </div>
        );
    }

    // Effect to color filters
    useEffect(() => {
      const updateFilters = () => {
        const allFilters = document.querySelectorAll('.filter-box');

        allFilters.forEach((filter) => {
            const color = filter.attributes.getNamedItem('data-color')?.value;

            if(color) {
                const colorName = colorMap.get(color)?.toLowerCase();
                // @ts-ignore
                displayEventsByColor[colorName] ? filter.classList.add('add-background-color') : filter.classList.remove('add-background-color');
            }
        })
      }

      updateFilters();
    }, [displayEventsByColor])
    
    return (
        <div className="drawer">
            <button className="drawer__create-btn" onClick={handleModal}>
                Create
            </button>
            <CalendarMini data={data} setData={setData}/>

            <div className="drawer__event-filters">
                <h3>Events</h3>
                <div className="drawer__filters" onClick={handleClick}>
                    { eventColors.map((item) => {
                        return createColorFilterComponent(item);
                    })}
                </div>
            </div>
        </div>
    )
}