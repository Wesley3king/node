//const request = require("request");
const { map } = require("cheerio/lib/api/traversing");
const express = require("express");
const puppeteer = require("puppeteer");
const app = express();


async function obter () {
    
    const browser = await puppeteer.launch({ 
        args :  [ '--disable-dev-shm-usage', '--shm-size=2gb' ]
      });
    const page = await browser.newPage();

    await page.goto('https://mundomangakun.com.br/');
    //await page.goto('https://mundomangakun.com.br/');
   //await page.screenshot({path: 'example6.png'})
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
       
        return [rr,imagem];
       
   }).catch(e => console.log(e));

   
   /*var css = Object.keys(elemento).reduce(
    (obj, prop) => (prop.match(/\D/) && (obj[prop] = styles[prop]), obj), {}
  );*/

  let fatia = elemento[0].map(item => item.split("\t\t\t\t\t\t\t\t"));
  let small = fatia.map( itens => itens[2].split("<small>"));
  let smallDone = small.map( itens => itens[1].split(" |"));

  delete small;
  let resultado = [];
   fatia.forEach((element,indice) => {
    resultado.push([element[1],smallDone[indice][0],elemento[1][indice]]);
  });
  delete smallDone, fatia;
console.log(`resultado : `,resultado);
//console.log(`imagem : `, elemento[1]);
    await browser.close();

}

obter();