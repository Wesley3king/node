//db.js
const mongoClient = require("mongodb").MongoClient;
const database= "testelocal", data_banco = "pushtst";
const dados = {
    nome : "martial peak",
    capa1 : "./img3.png",
    sinopse : "sinopse txt",
    link : "https://url.com",
    categorias : ["acão","harem", "aventura", "horror"],
    capitulos :  [
        [
        'Martial Peak - Capítulo 1',
        'https://mangayabu.top/wp-content/uploads/2022/06/fdf2e04ef30247428eef.png',
        ' A jornada para o Pico Marcial é algo longo e solitário. Indo de encontro com a adversidade, você deve sobreviver e permanecer vivo. Apenas aqueles que superarem os limites continuarão a jornada rumo ao objetivo de se tornar o mais forte. A Sky Tower testa seus discípulos de maneiras bem complexas para esta jornada. Um dia, o menosprezado Yang Kai conseguiu obter um livro negro, fazendo-o tomar rumo ao pico do mundo marcial! ',
        [
          'https://mangayabu.top/wp-content/uploads/2022/05/946ec7c9171b616d36ec.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/f34512cad36a8602c258.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/d71bda99401314a35c26.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/2dc68a95500695015429.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/c73ffc4f2bfc6e847832.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/9c51ee216a895ac69b87.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/ef9d000ff5e59b0ffbe5.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/f30ac0905eeac8c48b30.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/67ceb8cedeec4658bc72.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/ddcc16def1e77baae8b0.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/b6f94f9886409e9f255f.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/f0c134a664b483956082.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/2830f6e3b192c03fba6c.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/5480082b92b7d858167c.jpg'
        ]
      ]
    ]
}

const conectar = async ()=> {
    const client = await mongoClient.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('conectado!')
    return client.db(database)
};

const inserir = async () => {
    const db = await conectar();
    await db.collection(data_banco).insertOne(dados, (err, result)=>{
        if (err) console.log(err)
        else console.log("inserido ",result);
    })
}
const push = async (data) => {
    const db = await conectar();
    await db.collection(data_banco).updateMany({"nome": "martial peak"}, {"$push": {capitulos : {"$each": [[
        'Martial Peak - Capítulo 0',
        'https://mangayabu.top/wp-content/uploads/2022/06/fdf2e04ef30247428eef.png',
        ' A jornada para o Pico Marcial é algo longo e solitário. Indo de encontro com a adversidade, você deve sobreviver e permanecer vivo. Apenas aqueles que superarem os limites continuarão a jornada rumo ao objetivo de se tornar o mais forte. A Sky Tower testa seus discípulos de maneiras bem complexas para esta jornada. Um dia, o menosprezado Yang Kai conseguiu obter um livro negro, fazendo-o tomar rumo ao pico do mundo marcial! ',
        [
          'https://mangayabu.top/wp-content/uploads/2022/05/946ec7c9171b616d36ec.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/f34512cad36a8602c258.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/d71bda99401314a35c26.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/2dc68a95500695015429.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/c73ffc4f2bfc6e847832.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/9c51ee216a895ac69b87.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/ef9d000ff5e59b0ffbe5.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/f30ac0905eeac8c48b30.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/67ceb8cedeec4658bc72.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/ddcc16def1e77baae8b0.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/b6f94f9886409e9f255f.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/f0c134a664b483956082.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/2830f6e3b192c03fba6c.jpg',
          'https://mangayabu.top/wp-content/uploads/2022/05/5480082b92b7d858167c.jpg'
        ]
      ]],"$position": 0}}}, (err, result)=>{
        if (err) console.log(err)
        else console.log(result);
    });
}

const pull = async () =>{
    const db = await conectar();
    await db.collection(data_banco).updateMany({"nome": "martial peak"}, {"$pull": {capitulos: {"$in": ["captitulo 1"]}}}, (err, result)=>{
        if (err) console.log(err)
        else console.log(result);
    });
}
//inserir();
push();
//pull();