//db.js
const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true}, (err, connection)=>{
    if (err) console.log(err);
    global.connection = connection.db("testelocal");
    console.log("connected!");
});

