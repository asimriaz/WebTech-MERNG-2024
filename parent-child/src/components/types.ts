
export type course = {
    courseid: number,
    code: string,
    title: string,
    crhr: number,
    semester: number, 
    reg?: boolean
}

export type CourseFormProps = {
    getCourse: (course: course) => void
}