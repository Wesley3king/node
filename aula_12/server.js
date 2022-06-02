//envio de arquivos pelo node

const express = require("express");
const fs = require("fs");
const formidable = require("formidable");
const multer = require("multer");
const { sendFile } = require("express/lib/response");
const path = require("path");

const app = express();

app.get("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
    callback(null,"./data");
},
filename: (req, file, callback)=>{
    const {name , ext} = path.parse(file.originalname);
     //ext = .jpg  --- Date.now() data da execução
    callback(null, `${name}-${Date.now()}${ext}`);
}
})

const upload = multer({ storage });

app.post("/enviar",upload.single('file'),(req,res)=>{
  return res.send("sucesso"); 
})

app.listen(3000,()=> console.log("server on! : 3000"));