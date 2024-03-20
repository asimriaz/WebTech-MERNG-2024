import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CourseFormProps, course } from "./types";
import axios from "axios";

export default function CourseForm({ id, saveCourse }: CourseFormProps) {
	const [course, setCourse] = useState<course>(Object);

	const getCourseById = async () => {
		const response = (await axios.get(`/api/courses/${id}`)).data;
		if (response !== null) {
			setCourse(response);
		}
	};

	useEffect(() => {
		getCourseById();
	}, [id]);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.currentTarget;
		setCourse({ ...course, [name]: value });
	};

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveCourse(course);
    }

	return (
		<div>
			{Object.keys(course).length !== 0 && (
				<form onSubmit={handleSubmit}>
					<table>
						<tbody>
							<tr>
								<th>Id : </th>
								<td>
									{course._id}
									<input type="hidden" name="_id" defaultValue={course._id} />
								</td>
							</tr>
							<tr>
								<th>Code : </th>
								<td>
									<input type="text" name="code" value={course.code} onChange={handleChange} />
								</td>
							</tr>
							<tr>
								<th>Title : </th>
								<td>
									<textarea name="title" id="" cols={30} rows={2} value={course.title} onChange={handleChange} />
								</td>
							</tr>
							<tr>
								<th>Semester : </th>
								<td>
									<input type="text" name="semester" value={course.semester} onChange={handleChange} />
								</td>
							</tr>
							<tr>
								<th>CrHr : </th>
								<td>
									<input type="text" name="crhr" value={course.crhr} onChange={handleChange} />
								</td>
							</tr>
							<tr>
								<td colSpan={2}>
									<input type="submit" value="Save" />
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			)}
			{/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
		</div>
	);
}
