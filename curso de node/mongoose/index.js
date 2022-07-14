const mongoose = require("mongoose");

//conectando ao banco
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/cursodenode")
.then(()=> console.log("conectado!"))
.catch((e)=> console.log("falha na conexão : ", e));

//model1 - usuarios;
/* , {
    useMongoClient: true
} */
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        //caso este campo seja obrigatorio coloque como true
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
});

//cria o collection = nome_da_collection / model
mongoose.model('usuarios', UsuarioSchema);

//inserir um ususario
const new_user = mongoose.model('usuarios')
new new_user({
    nome: "Victor",
    sobrenome: "Lima",
    email: "lima@email.com",
    idade: 37,
    pais: "Brasil"
}).save()
.then(m => console.log("inserido : ", m))
.catch(e => console.log("erro : ", e));