const express = require('express');
const rotas = express.Router();

const cursos = [
    {curso: "node.js"},
    {curso: "react"},
    {curso: "js"},
    {curso: "jquery"}
]

/*rotas.get('/',(req,res)=> res.json({"ola":"seja bem vindo ao cfb cursos"}));*/

rotas.get("/:cursoid",(req,res)=>{
    let parametro = req.params.cursoid;
    console.log(parametro);
    let curso = cursos.find(i => i.curso == parametro);

    if(!curso) {
        res.status(404).json({erro: "curso não encontrado",procurou : parametro});
    }else{
        res.status(200).json(curso);
    }
});

module.exports = rotas;