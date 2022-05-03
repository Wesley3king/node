const http = require('http'), express = require('express'),debug = require('debug');

const app = express();
const port = 5000;
app.set('port',port);

const server = http.createServer(app);

const router = express.Router();

const route = router.get('/',(req,res,next)=>{
    res.status(200).send({title: "Node Store API",version: "0.0.1"});
});

app.use('/',route);

server.listen(port);

console.log(`servidor rodando na porta : ${port}`);