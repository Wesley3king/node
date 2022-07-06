const Sequelize = require("sequelize");
// 1 - nome do banco , 2 - nome do usuario, 3 - senha, 4 - obj de configuração;
const sequelize = new Sequelize('node', 'root', 'root', {host: "127.0.0.1", dialect: 'mysql'});

sequelize.authenticate()
.then(()=> console.log("sucesso!"))
.catch(console.log);

// Model postagem (criando tabelas)

const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

});

const usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//usuarios.sync({force: true});

//insrirndo dados nas tabelas
postagem.create({
    titulo: "um titulo qualquer",
    conteudo: "lorem ipsun fate grand order mahou shoujo"
});