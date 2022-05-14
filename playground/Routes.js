//teste - rotas
const routes = require("express").Router();
const url = require("url");
const db = require("./db");

routes.get("/", async (req,res)=>{
    data = await db.consultar();
    res.send(data);
});
routes.get('/cd', async (req, res) => {
    let params = url.parse(req.url,true).query;
    let rdb = await db.cadastrar(params);
    res.send(params);
});


module.exports = routes;