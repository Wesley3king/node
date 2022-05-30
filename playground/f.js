const express = require("express");
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(express.json());
app.use(cors(corsOptions));
app.post('/tst',(req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    let data = req.body;
    console.log(typeof data,typeof req.body);
    console.log(data);
    res.send(data);
});

app.listen(3000,()=> console.log("server on!"));

