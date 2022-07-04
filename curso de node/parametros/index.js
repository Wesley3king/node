const app  = require("express")();
//const app = express();
app.get("/", (req, res)=>{
	res.sendFile(`${__dirname}/index.html`)
})
app.get("/bemvindo/:nome", (req, res)=>{
	res.send(`ola ${req.params.nome}, seja bem vindo`);
});

//pode ter mais de um parametro
app.get("/bemvindo/:trabalho/:nome", (req, res)=>{
	res.send(`ola ${req.params.trabalho} ${req.params.nome}, seja bem vindo`);
});

app.listen(8000, ()=> console.log("servidor rondando na porta 8000!"));