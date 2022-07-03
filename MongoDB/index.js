const mongoDB = require("mongodb").MongoClient;
const url = "mongodb+srv://king_of_shadows:fC2amEpt68SwKJCc@cluster0.mj7rklk.mongodb.net/?retryWrites=true&w=majority";

//realizando a conexao com o cluster
mongoDB.connect(url,(err,banco) =>{
     if (err) console.log(err);
     const dbo = banco.db("cfbcursos");
     const obj = [
        {curso:"curso de lua", canal: "CFB Cursos"},
        {curso:"curso de redux", canal: "washington"},
        {curso:"curso de dart", canal: "washington"}
    ];
     const colecao = "cursos";
    
     //inserindo dados
   /*  dbo.collection(colecao).insertMany(obj,(e,res)=>{
         if (e) console.log(e);
         console.log(res.insertedCount + " cursos adicionado a db");
         //banco.close();
     });

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
       console.log(result.deletedCount + " deletados");
   }); 

   //updateOne
   let query = {"curso": "curso de graphQL"};
   let update = {$set : {"curso": "curso de flexbox"}};
   dbo.collection(colecao).updateOne(query, update, (e, result)=> {
    if (e) console.log(e)
    else console.log(`${result.modifiedCount} documentos atualizados com sucesso!  `);

   });
   //updateMany
   let query = {"curso": "curso de lua"};
   let update = {$set : {"curso": "curso de PHP"}};
   dbo.collection(colecao).updateMany(query, update, (e, result) => {
    if (e) cpnsole.log(e)
    else console.log(`${result.modifiedCount} cursos atualizados`)
   });*/
   //lista todos os dados:
   dbo.collection(colecao).find().toArray((e, result)=>{
    if (e) console.log(e);
    console.log(result);
    banco.close();
   });
});