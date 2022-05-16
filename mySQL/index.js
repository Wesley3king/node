//node com mysql

(async ()=>{
    const db = require('./db');
    //insert
    /*let ind = 4,name = "sergio",nasc = '1969-04-29';
    await db.inserir({indice: ind, nome: name, idade: nasc});*/

    //update
   /* let id = 2;
    let date = '2002-07-17';
    await db.atualizar(id,{nasc: date});*/

    //delete
   /* let id = 2;
    await db.deletar(id);*/
    //select
    const clientes = await db.mostrar();
    console.log(clientes);
})();