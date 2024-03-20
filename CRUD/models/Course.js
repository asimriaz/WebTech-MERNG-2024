import { model, Schema }  from 'mongoose';

const courseSchema = new Schema({
	courseid: Number,
	code: String,
	title: String,
	crhr: Number,
	semester: Number
})

export const Course = model('Course', courseSchema);
