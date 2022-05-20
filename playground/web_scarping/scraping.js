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

        return rr;
       /*let c = document.querySelectorAll(".post-projeto-background");
       return getComputedStyle(c['0']).backgroundImage;*/
   }).catch(e => console.log(e));

   
   /*var css = Object.keys(elemento).reduce(
    (obj, prop) => (prop.match(/\D/) && (obj[prop] = styles[prop]), obj), {}
  );*/

  let fatia = elemento.map(item => item.split("\t\t\t\t\t\t\t\t"));
  let small = fatia.map( itens => itens[2].split("<small>"));
  let smallDone = small.map( itens => itens[1].split(" |"));

  delete small;
  let resultado = [];
   fatia.forEach((element,indice) => {
    resultado.push([element[1]])
  });
console.log(`elemento : `,elemento);
//console.log(elemento);
        /*let nomes = [];
        let nn = Object.keys(elemento);
        for (let i= 0; i< nn.length; ++i) {
          nomes.push(elemento[nn[i]].innerHTML);
        }*/
    await browser.close();
    console.log(smallDone);

}

obter();