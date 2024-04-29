import React, { useContext } from 'react'
import { HolidayContext } from "../context/HolidayContext"

export default function Slots() {
    const { holiday, updateHoliday } = useContext(HolidayContext)
    return (
        <>
            <div>Slots - {holiday.name}</div>
            <button onClick={()=> updateHoliday("Foreign President Visit")}>Update</button>
        </>
    )
}
