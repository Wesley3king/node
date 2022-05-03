const http = require('http');
const fs = require('fs');
const port = process.env.PORT;

const server = http.createServer((req,res)=>{
    if (req.url === "/"){
    fs.readFile('teste.html',(err,archive)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(archive);
        return res.end();
    })
}else if (req.url === "/create"){
    //writeFile,appendFile (criam um novo arquivo);
    fs.appendFile('texto.txt','criando arquivos com node',(err)=>{
        if (err) throw err;
    })
}else if (req.url === "/remomear"){
    fs.rename('./texto.txt','./newName.txt',(err)=>{
        if (err){ throw err 
        }else{ console.log("renomeado")};
    });
}else if (req.url === "/delete") {
    //unlink (exclui um arquivo) , unlinkSync (exclui tudo no diretório)
    fs.unlink('./newName.txt',(err)=>{
        if (err){
            throw err;
        }else{
            console.log('deletado');
        }
    });

}else if (req.url === "/read"){
    fs.readFile('./texto.txt',(err,dado)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(dado);
        return res.end();
    })
}
});

server.listen(port || 5000,()=>{console.log("server rodadndo!")});
