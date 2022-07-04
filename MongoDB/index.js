const mongoDB = require("mongodb").MongoClient;
const url = "";

//realizando a conexao com o cluster
mongoDB.connect(url,async (err,banco) =>{
     if (err) console.log(err);
     const dbo = banco.db("cfbcursos");
     const col1 = [
        {idCurso: 0, aulas: 4},
        {idCurso: 1, aulas: 16},
        {idCurso: 2, aulas: 63},
        {idCurso: 3, aulas: 145},
        {idCurso: 4, aulas: 42},
        {idCurso: 5, aulas: 50}
     ]
     const col2 = [
        {"id": 0,curso:"curso de lua"},
        {"id": 1,curso:"curso de redux"},
        {"id": 2,curso:"curso de dart"},
        {"id": 3,curso:"curso de c++"},
        {"id": 4,curso:"curso de react"},
        {"id": 5,curso:"curso de flutter"}
    ];
     const colecao = "cursos";
     const cole2 = "join", cole3 = "join2";
  /*   
     //inserindo dados
    dbo.collection(cole3).insertMany(col1,(e,res)=>{
         if (e) console.log(e);
         console.log(res.insertedCount + " cursos adicionado a db");
         //banco.close();
     });
     dbo.collection(cole2).insertMany(col2,(e,res)=>{
        if (e) console.log(e);
        console.log(res.insertedCount + " cursos adicionado a db");.find()
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
   });

   //limit (find com um numero maximo de resultados)
   let lim = await dbo.collection(colecao).find({}).limit(2).toArray();
   console.log(lim);*/

   //join (aggregate) 

   dbo.collection(cole2).aggregate([
    {   $lookup: {
        from: cole3,
        localField: 'id',
        foreignField: 'idCurso',
        as: "detalhes"
    }

    }
   ]).toArray((e, result)=>{
    if (e) console.log(e);
    console.log(JSON.stringify(result));
   // banco.close();
   });


   //lista todos os dados:
   //console.log("---------------------------");
   dbo.collection(colecao).find().toArray((e, result)=>{
    if (e) console.log(e);
    console.log(result);
    banco.close();
   });
});