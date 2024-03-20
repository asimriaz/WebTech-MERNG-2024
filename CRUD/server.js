import express from "express"
const app = express()
const PORT = process.env.PORT || 5000
import indexRouter from "./routes/index.js"

app.use(express.json())
app.use('/', indexRouter);


app.listen(PORT, ()=> console.log(`Server is listening in http://localhost:${PORT}`));