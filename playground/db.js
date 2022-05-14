//conectar com o mySQL
const conectar = async () => {
    if (global.conexao && global.conexao.state != 'disconected') return global.conexao;

    const mysql = require("mysql2/promise");
    const connect = mysql.createConnection("mysql://root:root@127.0.0.1:3306/node");
    console.log("conectado a db !");
    global.connection = connect;
    return connect;
}

const consultar = async () =>{
    let con = await conectar();
    let [data] = await con.query("select * from usuarios;");

    return data;
}

const cadastrar = async (user) => {
    let conect = await conectar();
    let v1 = '(select max(t.i_ind_usuarios)+1 from usuarios t),';
    let sql = `insert into usuarios values (${v1}?,?,?);`;
    let valores = [user.nome, user.senha, null]
    await conect.query(sql, valores);
    return "did!";
}
module.exports = {consultar, cadastrar};