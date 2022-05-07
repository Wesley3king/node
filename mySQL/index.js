//node com mysql

(async ()=>{
    const db = require('./db');
    //insert
    /*let ind = 4,name = "sergio",nasc = '1969-04-29';
    await db.inserir({indice: ind, nome: name, idade: nasc});*/

    //select
    const clientes = await db.mostrar();
    console.log(clientes);
})();