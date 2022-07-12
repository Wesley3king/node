const mongoose = require("mongoose");

//conectando ao bamco
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/cursodenode", {
    useMongoClient: true
})
.then(()=> console.log("conectado!"))
.catch((e)=> console.log("falha na conexão : ", e));