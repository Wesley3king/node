//const request = require("request");
const { map } = require("cheerio/lib/api/traversing");
const express = require("express");
const puppeteer = require("puppeteer");
const app = express();


async function obter () {
    
    const browser = await puppeteer.launch({ 
        args :  [ '--disable-dev-shm-usage', '--shm-size=2gb' ],
        headless: false
      });
    const page = await browser.newPage();

    //page.setDefaultTimeout(60000);
    //await page.setDefaultNavigationTimeout(40000);
    //await page.goto('https://mundomangakun.com.br/situacao/em-andamento/');
     
    await page.goto('https://mundomangakun.com.br/');
   //await page.screenshot({path: 'example6.png'})
   //await page.waitForSelector(".post_projeto_thumbnail_img");
   const elemento = await page.evaluate(()=>{
       let nome = document.querySelectorAll(".titulo-cap");

       let rr = [];
       let nn = Object.keys(nome);
       for (let i= 0; i< nn.length; ++i) {
         rr.push(nome[nn[i]].innerHTML);
       }
       let c = document.querySelectorAll(".post-projeto-background");
       let imagem = [],ind = Object.keys(c);
       for (let i = 0; i < ind.length; ++i) {
        imagem.push(getComputedStyle(c[ind[i]]).backgroundImage);
       }
       //get links
       let lin = document.querySelectorAll(".post-projeto");
       let chave = Object.keys(lin),pre = [],res = [];
       for (let i = 0; i < chave.length; ++i) {
         pre.push(lin[chave[i]].innerHTML);
       }
       /*for (let i = 0; i < pre.length; ++i) {
        res.push(pre[i].getAttribute("href"));
      }*/

        return [rr,imagem,pre];
       
   }).catch(e => console.log(e));

   
   /*var css = Object.keys(elemento).reduce(
    (obj, prop) => (prop.match(/\D/) && (obj[prop] = styles[prop]), obj), {}
  );*/

  /*let fatia = elemento[0].map( item => item.split("\t\t\t\t\t\t\t\t"));
  let small = fatia.map( itens => itens[2].split("<small>"));
  let smallDone = small.map( itens => itens[1].split(" |"));*/

let fc = elemento[2].map(item => String(item));
  let fc1 = fc.map(item => item.split('<a href="'));
  let fc2 = fc1.map(sel => sel[1].split('/cap-'));

  /*delete small;
  let resultado = [];
   fatia.forEach((element,indice) => {
    resultado.push([element[1],smallDone[indice][0],elemento[1][indice]]);
  });
  delete smallDone, fatia;*/
//console.log(`resultado : `,resultado);
console.log(`link : `, fc2);
    await browser.close();

}

obter();