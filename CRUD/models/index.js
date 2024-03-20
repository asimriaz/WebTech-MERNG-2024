import mongoose from "mongoose";
import { Course } from "./Course.js"


(async () => {
    await mongoose.connect(`mongodb://127.0.0.1:27017/academic`);
})();

export const db = {
    Course,
};
