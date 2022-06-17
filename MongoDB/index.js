const mongoDB = require("mongodb").MongoClient;
const url = "mongodb+srv://king_of_shadows:fC2amEpt68SwKJCc@cluster0.mj7rklk.mongodb.net/?retryWrites=true&w=majority";

//realizando a conexao com o cluster
mongoDB.connect(url,(err,banco) =>{
     if (err) console.log(err);
     const dbo = banco.db("cfbcursos");
     const obj = {curso:"curso de lua", canal: "CFB Cursos"};
     const colecao = "cursos";
    
     //inserindo dados
     dbo.collection(colecao).insertOne(obj,(e,res)=>{
         if (e) console.log(e);
         console.log("1 novo curso adicionado a db");
         //banco.close();
     });
/*
     //findOne(), find() (procurando dados)
     dbo.collection(colecao).findOne({/* filtros *//*},(e, res)=>{
         if (e) console.log(e);
          console.log(res);
         //banco.close();
     });
    //convertendo os resultados em array:
    const query = {canal: /C./};
        if (e) console.log(e);
         console.log(res);
        banco.close();
    });

    //ordenado com sort
    const ordenacao = {curso: -1};
    dbo.collection(colecao).find().sort(ordenacao).toArray((e, res)=>{
        if (e) console.log(e);
         console.log(res);
        banco.close();
    });
   //deletando objetos da collection one/many
   const deletar = {curso: /.S/};
   dbo.collection(colecao).deleteMany(deletar, (e, result)=>{
       if (e) console.log(e);
       console.log("deletado");
   }); 
   */

   //lista todos os dados:
   dbo.collection(colecao).find().toArray((e, result)=>{
    if (e) console.log(e);
    console.log(result);
    banco.close();
   });
});