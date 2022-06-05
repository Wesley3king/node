const mongoDB = require("mongodb").MongoClient;
const url = "mongodb+srv://king_of_shadows:fC2amEpt68SwKJCc@cluster0.mj7rklk.mongodb.net/?retryWrites=true&w=majority";

//realizando a conexao com o cluster
mongoDB.connect(url,(err,banco) =>{
     if (err) console.log(err);
     const dbo = banco.db("cfbcursos");
     const obj = {curso:"curso de sql", canal: "CFB Cursos"};
     const colecao = "cursos";

     //inserindo dados
     dbo.collection(colecao).insertOne(obj,(e,res)=>{
         if (e) console.log(e);
         console.log("1 novo curso adicionado a db");
         banco.close();
     });

     //findOne(), find() (procurando dados)
     dbo.collection(colecao).findOne({/* filtros */},(e, res)=>{
         if (e) console.log(e);
          console.log(res);
         banco.close();
     });
    //convertendo os resultados em array:
     dbo.collection(colecao).find({/* filtros */}, {projection: {_id:0, canal:0} }).toArray((e, res)=>{
        if (e) console.log(e);
         console.log(res);
        banco.close();
    });

});