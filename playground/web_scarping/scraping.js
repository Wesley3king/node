//const request = require("request");
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
       let nome = document.querySelectorAll(".titulo-cap").innerHTML;
        return nome;
       /*let c = document.querySelectorAll(".post-projeto-background");
       return getComputedStyle(c['0']).backgroundImage;*/
   }).catch(e => console.log(e));

   /*var css = Object.keys(elemento).reduce(
    (obj, prop) => (prop.match(/\D/) && (obj[prop] = styles[prop]), obj), {}
  );*/
console.log(`elemento : `,elemento);
console.log(elemento);
        let nomes = [];
        for (let i= 0; i< elemento.length; ++i) {
          nomes.push(elemento[`${i}`]);
          console.log(elemento[`${i}`]);
        }
    await browser.close();
    console.log(nomes);

}

obter();