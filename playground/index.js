const express = require("express");
const app = express();
const rotas = require("./Routes");

app.use(rotas);


app.listen(process.env.PORT || 5000,()=> console.log(`servidor rodando na porta : ${process.env.PORT || 5000}`));

