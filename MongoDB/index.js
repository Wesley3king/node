const mongoDB = require("mongodb").MongoClient;
const url = "mongodb+srv://king_of_shadows:fC2amEpt68SwKJCc@cluster0.mj7rklk.mongodb.net/?retryWrites=true&w=majority";


mongoDB.connect(url,(err,banco) =>{
     if (err) console.log(err);
     const dbo = banco.db("cfbcursos");
     const obj = {curso:"curso de node", canal: "CFB Cursos"};
     const colecao = "cursos";
     dbo.collection(colecao).insertOne(obj,(e,res)=>{
         if (e) console.log(e);
         console.log("1 novo curso adicionado a db");
         banco.close();
     });
});