import React, { useEffect, useState } from "react";
import { course } from "./types";
import axios from "axios";
import CourseForm from "./CourseForm";

export default function CourseLIst() {
	const [courses, setCourses] = useState<course[]>([]);
    const [id, setId] = useState("")

	const getCourses = async () => {
		const response = (await axios.get(`/api/courses`)).data;
		if (response !== null) {
			setCourses(response);
		}
	};

	useEffect(() => {
		getCourses();
	}, []);

	const handleClick = (id: string) => {
		console.log(id);
        setId(id)
	};

    const saveCourse = async(course: course) =>{
        console.log(course)
        const response = (await axios.post(`/api/courses/save`, {...course})).data
        console.log(`saved`, response);
        setCourses(courses.map(c => c._id === course._id ? course: c));
        setId("");
    }

	return (
		<div>
			<div className="col">
				{courses.length !== 0 && (
					<table>
						<tbody>
							<tr>
								<td>Id</td>
								<td>Code</td>
								<td>Title</td>
								<td>Semester</td>
								<td>Cr</td>
							</tr>
							{courses.map((c) => (
								<tr key={c._id}>
									<td>{c.courseid}</td>
									<td>{c.code}</td>
									<td>
										<a href="#" onClick={() => handleClick(c._id)}>
											{c.title}
										</a>
									</td>
									<td>{c.semester}</td>
									<td>{c.crhr}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
			<div className="col">
                {id.length !== 0 && <CourseForm id={id} saveCourse={saveCourse} />}
            </div>
		</div>
	);
}
