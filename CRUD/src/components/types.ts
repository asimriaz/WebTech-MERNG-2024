export type course = {
	_id: string,
	courseid: number,
	code: string,
	title: string,
	crhr: number,
	semester: number
};


export type CourseFormProps = {
    id: string, 
    saveCourse: (course: course) => void
}