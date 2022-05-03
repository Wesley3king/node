'use strict';
const url = require('url');
const http = require('http');
const port = 5000;
const host = '127.0.0.1';

//rotas pela url

/*const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    if (req.url === "/") {
        res.write("<h1> bem vindo ao cfb cursos (home) </h1>");
    }else if (req.url === "/curso") {
        res.write("<h1> curso de node js</h1>");
    }else if (req.url === "/cursos") {
        res.write("<h1> canal cfb cursos </h1>");
    }else if(req.url === "/node/cursos") {
        res.write("<h1> você esta dentro da url do curso</h1>");
    }
    res.end();
});

server.listen(port,host,()=> console.log(`servidor esta na porta : ${port}`));*/

//parametros pela url

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(`<h1>${req.url}</h1>`);
    let p = url.parse(req.url,true).query;
    res.write(`<p>first : ${p.nome} </p>`);
    res.write(`<p>second : ${p.curso} </p>`);
    res.end();
});

server.listen(port,host,()=> console.log(`servidor esta na porta : ${port}`));

