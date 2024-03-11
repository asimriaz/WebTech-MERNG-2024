const db = require('./models');


// db.Mark.find()
// //.populate('student head')
// .then(students => console.log(JSON.stringify(students, null, 4)));

// db.Mark.find({ regno: '1712218' }).select({ _id: 1 })
// .then(students => console.log(JSON.stringify(students, null, 4)));

// db.Student.find()
// .then(students => console.log(JSON.stringify(students, null, 4)));

// db.Student.find().then(students => {
//     students.forEach(async s => {
//         let result = await db.Mark.updateMany(
//             { regno: s.regno },
//             {
//                 $set: {
//                     student: s._id
//                 }
//             }
//         );
//         console.log(result);
//     })
// })

// db.Head.find().then(heads => {
//     heads.forEach(async h => {
//         let result = await db.Mark.updateMany(
//             { hid: h.hid },
//             {
//                 $set: {
//                     head: h._id
//                 }
//             }
//         );
//         console.log(result);
//     })
// })

// db.Student.find().then(students => {
//     students.forEach(async s => {
//         let ids = await db.Mark.find({ regno: s.regno }).select({ _id: 1 });
//         //console.log(ids);

//         let result = await db.Student.updateOne(
//             { regno: s.regno }, 
//             {
//                 $push:{
//                     marks: ids
//                 }
//             }
//         );
//         console.log(result);
//     })
// })


db.Student.aggregate([
    {
        $lookup:{
            from: "marks", 
            foreignField: "regno", 
            localField: "regno", 
            as: "obtain"
        }
    }, 
    {
        $unwind: "$obtain"
    }, 
    {
        $group:{
            _id:{ regno: "$regno", name: "$name" }, 
            total :{ $sum: "$obtain.marks" }
        }
    }, 
    {
        $project: { _id: 0, regno: "$_id.regno", name: "$_id.name", total: 1 }
    }
])
.then(res => console.log(JSON.stringify(res, null, 4)));
