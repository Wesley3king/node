//datbase mySQL 2

const conectar = async ()=> {
    if (global.conexao && global.conexao.state != 'disconected')
        return global.conexao;
    const mysql = require('mysql2/promise');
    const connect = mysql.createConnection("mysql://root:root@127.0.0.1:3306/node");
    console.log("connectado ao db");
    global.conexao = connect;
    return connect;
};

const mostrar = async ()=>{
    const con = await conectar();
    const [linhas] = await con.query("select * from cliente;");
    return await linhas;
};

module.exports = {mostrar};