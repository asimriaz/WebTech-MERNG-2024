import React, { KeyboardEvent, useState } from 'react'
import data from './courses.json';
import { CourseFormProps, course } from './types';

export default function CourseForm({getCourse}:CourseFormProps) {
    const [code, setCode] = useState("")
    const [courses, setcourses] = useState<course[]>(data)

    const handleKeyDown = (e : KeyboardEvent<HTMLInputElement>) => {
        if(e.code === 'Enter'){
            let course = courses.find(c => c.code === code.toUpperCase())        
            getCourse({...course, reg: false} as course)
        }
    }

    return (
        <div>
            <input type="text" 
            name="code" 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            />
        </div>
    )
}
