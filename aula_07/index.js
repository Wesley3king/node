const express = require('express');
const rotas = require('./Rotas.js');
const port = process.env.PORT;

const app = express();

app.use('*',rotas);

app.listen(port || 5000,()=>console.log("servidor rodando na porta 5000"));