'use strict';

const http = require('http');

const porta = 5000;

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("cfb cursos\ncurso de node");
    res.end();
}).listen(porta);
console.log(`servidor rodando na porta : http://localhost:${porta}/`);