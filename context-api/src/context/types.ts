export interface Holiday {
    name: string
}

export type HolidayContextType = {
    holiday: Holiday;
    updateHoliday: (value: string) => void
}