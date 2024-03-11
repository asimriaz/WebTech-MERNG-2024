const router = require('express').Router()
const db = require('../models');


router.get('/', (req, res)=>{
    res.send('Hello World');
})

router.get('/students', async (req, res)=>{
    const students = await db.Student.find();
    res.status(200).json(students);
});

router.post('/students/regno', async (req, res)=>{
    //console.log(req.body);
    const student = await db.Student.find({regno: req.body.regno});
    res.status(200).json(student); 
}) 

router.post('/students/StudentByRegNo', async (req, res)=>{
    //console.log(req.body);
    const student = await db.Student.findOne({regno: req.body.regno});
    res.status(200).json(student); 
}) 


module.exports = router