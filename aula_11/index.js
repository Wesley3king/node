//eventos em node

const http = require('http');
const eventos = require("events");
const { Console } = require('console');
const emissor = new eventos.EventEmitter();

emissor.on('start',()=> console.log("processo iniciado"));
emissor.on('end',()=> console.log("processo terminado"));
//warning (praticas ruins)
process.on('warning',(msg)=>console.log(`algo esta errado/pose ser melhorado : ${msg}`));
//SIGINT (terminar o processo - desligar o servidor)
process.on('SIGINT',()=> {console.log("desligando o servidor ..."); process.exit();});
const servidor = http.createServer((req,res)=>{
    emissor.emit('start');
    res.writeHead(200,{"Content-Type":"text/plain"});

    res.write("CFB Cursos");
    emissor.emit('end');
    res.end();
});

servidor.listen(process.env.PORT || 5000,()=> console.log("servidor rodando !"));