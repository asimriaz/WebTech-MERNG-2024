import express from 'express'
const router = express.Router();
import { db } from "../models/index.js"

router.get('/courses', async (req, res) => {
    const courses = await db.Course.find().sort('courseid');
    res.status(200).json(courses);
});

router.get('/courses/:id', async (req, res) => {
    const course = await db.Course.findOne({ _id: req.params.id })
    res.status(200).json(course);
});

router.post('/courses/save', async (req, res) => {
    console.log(req.body)
    const course = await db.Course.findByIdAndUpdate(
        { _id: req.body._id }, {
        $set: req.body
    }, { new: true }
    )
    
    res.status(200).json(course);
    
});




export default router;


