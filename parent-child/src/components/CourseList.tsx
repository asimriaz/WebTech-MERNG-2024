import React, { useState } from 'react'
import CourseForm from './CourseForm';
import { course } from './types';

export default function CourseList() {
    const [offCrs, setOffCrs] = useState<course[]>([])
    const [msg, setMsg] = useState("")
    const [show, setShow] = useState("All")

    const getCourse = (course: course) =>{
        console.log(`CourseList : `, course);
        Object.keys(course).length === 1
        ? setMsg("Course not found")
        : offCrs.some(o => o.code === course.code)
        ? setMsg("Course alredy registered")
        : setOffCrs([...offCrs, course]) 
    }

    const handleClick = (code: string) =>{
        setOffCrs(offCrs.map(c => c.code === code ? {...c, reg: !c.reg}: c))
    }

    let courses = show === "Reg"
                ? offCrs.filter(o => o.reg)
                : show === "Off" 
                ? offCrs.filter(o => !o.reg) 
                : offCrs

    return (
        <div>
            <div style={{color: 'red'}}>{msg}</div>
            <div><CourseForm getCourse={getCourse}/></div>
            {offCrs.length !== 0 && courses.map(o => 
                <div key={o.courseid} 
                style={{
                    cursor: 'pointer', 
                    color: o.reg ? `blue`: `#d3d3d3`
                }}
                onClick={() => handleClick(o.code)}
                >{o.title}</div>
            )}
            <div>
                <button onClick={()=> setShow("All")}>All</button>
                <button onClick={()=> setShow("Reg")}>Reg</button>
                <button onClick={()=> setShow("Off")}>Off</button>
            </div>
        </div>
    )
}
