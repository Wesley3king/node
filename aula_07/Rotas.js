const express = require('express');
const url = require('url');
const rotas = express.Router();

const cursos = [
    {curso: "node.js"},
    {curso: "react"},
    {curso: "js"},
    {curso: "jquery"}
]

/*rotas.get('/',(req,res)=> res.json({"ola":"seja bem vindo ao cfb cursos"}));*/

rotas.get('/',(req,res)=>{
    let parametro = url.parse(req.url, true).query;
    console.log(parametro);
    let curso = cursos.find(i => i.curso.toString() == parametro.curso);

    if(!curso) {
        res.status(404).json({erro: "curso não encontrado",procurou : parametro});
    }else{
        res.status(200).json(curso);
    }
});

module.exports = rotas;