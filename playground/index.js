const express = require("express");
const app = express();
const rotas = require("./Routes");

app.use(rotas);

const things = ["contexto", "cova"];
const regex = "co";
const txt = `${regex}`;
const rr = new RegExp(txt,'g')

for(e of things) {
    console.log(e.match(rr))
}


app.listen(process.env.PORT || 5000,()=> console.log(`servidor rodando na porta : ${process.env.PORT || 5000}`));

