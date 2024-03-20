import { db } from "./models/index.js"

db.Course.find().then(res => console.log(res));