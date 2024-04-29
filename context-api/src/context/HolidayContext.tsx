import React, { createContext, ReactNode, useState } from 'react'
import { Holiday, HolidayContextType } from "./types"

export const HolidayContext = createContext<HolidayContextType>({} as HolidayContextType)

export const HolidayProvider = ({ children }: { children: ReactNode }) => {
    const [holiday, setHoliday] = useState<Holiday>({ name: 'Eid' });

    const updateHoliday = (value: string) => setHoliday({ name: value });

    return (
        <HolidayContext.Provider value={{ holiday, updateHoliday }}>
            {children}
        </HolidayContext.Provider>
    )
}