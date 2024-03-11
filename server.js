const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));


app.listen(PORT, ()=> console.log(`Server is listening on http://localhost:${PORT}`));


