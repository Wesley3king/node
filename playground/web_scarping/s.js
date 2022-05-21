//const request = require("request");
const { map } = require("cheerio/lib/api/traversing");
const express = require("express");
const puppeteer = require("puppeteer");
const app = express();


async function obter () {
    
    const browser = await puppeteer.launch({ 
        args :  [ '--disable-dev-shm-usage', '--shm-size=1gb' ],
        headless: true
      });
    const page = await browser.newPage();
     

    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if(req.resourceType() === 'image'){
            req.abort();
            }
            else {
            req.continue();
        }
    });

    await page.goto('https://mundomangakun.com.br/situacao/em-andamento/');
   
   const elemento = await page.evaluate(()=>{
       //nome
       let nome = document.querySelectorAll(".post_projeto_titulo");
       let rr = [];
       let nn = Object.keys(nome);
       for (let i= 0; i< nn.length; ++i) {
         rr.push(nome[nn[i]].innerHTML);
       }
       //imagems
       let imm = document.querySelectorAll(".post_projeto_thumbnail_img");
       let quant = Object.keys(imm), res = [];
       for (let i = 0; i < quant.length; ++i) {
           res.push(imm[quant[i]].getAttribute("src"));
       }
       //capitulo
       let ult = document.querySelectorAll(".post_projeto_ultimo_cap");
       let inu = Object.keys(ult), cap = [];
       for (let i = 0; i < inu.length; ++i) {
           cap.push(ult[inu[i]].innerText);
       }
       //link
       let llk = document.querySelectorAll(".btn_large_primary");
       let ind = Object.keys(llk), lin = [];
       for (let i = 0; i < ind.length; ++i) {
           lin.push(llk[ind[i]].getAttribute("href"));
       }

       return [rr,res,cap,lin];
       
   }).catch(e => console.log(e));

   let linkn = elemento[3].filter((val, ind)=> 
       ind%2 !== 0 ? val: console.log("eliminado")
   );

  let dados = elemento[0].map((item, indice )=> [item, elemento[1][indice], elemento[2][indice], linkn[indice]]);
   
   //console.log(linkn);
console.log(dados);
    await browser.close();

}

//obter();

async function obterInterno (url) {
    let browser = await puppeteer.launch({ 
        args :  [ '--disable-dev-shm-usage', '--shm-size=1gb' ],
        headless: true
      });
      let page = await browser.newPage();

      await page.setRequestInterception(true);
        page.on('request', (req) => {
            if(req.resourceType() === 'image'){
                req.abort();
                }
                else {
                req.continue();
            }
        });
    await page.goto(url);

    const info = await page.evaluate(()=> {
        //sinopse
        let sin = document.querySelector(".conteudo_projeto");
        
        //lista de capitulo
        let link_c = document.querySelectorAll(".link_capitulo");
        let cap = [],tot = [],ind = Object.keys(link_c);
       for (let i = 0; i < ind.length; ++i) {
        cap.push(link_c[i].getAttribute("onclick"));
        tot.push(link_c[i].innerHTML);
       }
        return [sin.innerHTML,cap,tot];
    });

    //tratamento de sinopse
    let fase1 = info[0].split(">");
    let fase2 = fase1[1].split("<");
    //console.log(fase2[0]);

    //tratando links de capitulo
    let href_l = info[1].map(item=> item.replace(/[\\]/g,""));
    let fatia1 = href_l.map(item=> item.split("link':'"));
    let fatia2 = fatia1.map(sub => sub[1].split("','"));
    
    delete fase1, href_l, fatia1;
    console.log(info[2]);
    //console.log(fatia2);
    await browser.close();
}

obterInterno('https://mundomangakun.com.br/projeto/yuusha-sama-yukagen-wa-ikaga-desu-ka/');