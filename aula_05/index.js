const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("i'd rather be a lover than a fighter");
});

app.get('/second',(req,res)=>{
    res.json({
        "cause all my life i've been fighting": "never i feel a feeling of comfort"
    })
});

app.listen(port || 5000,()=> console.log(`servidor rodando na porta ${port || 5000}`));