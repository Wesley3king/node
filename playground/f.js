const express = require("express");
const app = express();

app.use(express.json());
app.post('/tst',(req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    let data = req.body;
    console.log(typeof data,typeof req.body);
    console.log(data);
    res.send(data);
});

app.listen(3000,()=> console.log("server on!"));

