(async ()=>{
    const db = require('./db');
    const clientes = await db.mostrar();
    console.log(clientes);
})();