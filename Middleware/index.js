const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


const logger = (req, res, next)=>{
    req.msg = `This is from Logger Middleware !!!`;
    next();
}


const auth = (req, res, next)=>{
    if(req.query.username === "Peter"){
        next()
    }else{
        res.send("Access Denied");
    }
}

app.use(logger);

app.get('/login',auth,  (req, res)=>{
    res.send(`Hello World <br> ${req.msg}`);
});

app.get('/', (req, res)=>{
    res.send(`Hello World <br> ${req.msg}`);
});




app.get('/msg', (req, res)=>{
    res.send("Hello World from Msg");
});

app.listen(PORT, ()=> console.log(`Server is listening on port http://localhost:${PORT}`));

