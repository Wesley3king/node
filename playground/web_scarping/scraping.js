//const request = require("request");
//const { map } = require("cheerio/lib/api/traversing");
//const express = require("express");
const puppeteer = require("puppeteer");
//const app = express();


async function obter () {
    
    const browser = await puppeteer.launch({ 
        args :  [ '--disable-dev-shm-usage', '--shm-size=2gb' ],
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
    
    await page.goto('https://mangayabu.top/');
    await page.waitForTimeout(3000);
   const elemento = await page.evaluate(()=>{
       let nome = document.querySelectorAll(".carousel-item");

       let rr = [];
       let nn = Object.keys(nome);
       for (let i= 0; i< nn.length; ++i) {
         rr.push(nome[nn[i]].innerHTML);
       }
       return rr;
       
   }).catch(e => console.log(e));

   //remove as scans nativas
   for (let i = 0; i < 14; ++i) {
     elemento.pop();
   }
   //obtem = fatia nome do manga, link link para o main, img imagem
   let fatia1 = elemento.map( str => str.split('/">'));
   
   let fatia_2 = [],fatia_3 = [], fatia = [];//6 - lacanmentos,2 - ultimos adicionados, 3 - populares
   let link = [],link_2 = [], link_3 = [];
   let img = [], img_6 = [], img_2 = [];

   for(let i = 0; i < fatia1.length; ++i) {
   if (fatia1[i].length === 2){
    fatia_2.push(fatia1[i][1].split("</a"));
    link_2.push(fatia1[i][0].split('" href="'));
    img_2.push(fatia1[i][0].split('src="'));
    console.log(fatia1[i]);

   }else if (fatia1[i].length === 6) {
    fatia.push(fatia1[i][5].split("</a"));
    link.push(fatia1[i][4].split(' href="'));
    img_6.push(fatia1[i][0].split('src="'));

   }else if (fatia1[i].length === 3) {
    fatia_3.push(fatia1[i][2].split("</a"));
    link_3.push(fatia1[i][1].split('" href="'));
    img.push(fatia1[i][0].split('src="'));

   }
  }
//console.log(link_2,link_3,link);
//finalizando links
let l_link = [], p_link = [], u_link = [];

for(let i of link_3) {
  //console.log(i);
  u_link.push(i[1]);//ultimos add
}
for (let i of link_2) {
  p_link.push(i[2]);//populares
}
for(let i of link) {
  //console.log(i);
  l_link.push(i[1]);//lancamentos
}
  //finalizando imagens
  let image_6 = img_6.map(arr => arr[1].split('" data-'));
  let image_2 = img_2.map(arr => arr[1].split('" data-'));
  //console.log();
  
  //montando o array
  //lancamentos
  let f1 = l_link.map((anc, ind) => [fatia[ind][0],image_6[ind][0],anc]);
  //populares
  let f2 = p_link.map((lnk, ind) => [fatia_2[ind][0], image_2[ind][0]])
  console.log(f2);
  //let dados = imagems.map((ima, indice) => [fatia_2[indice][0],ima[0],link[indice][1]]);

   //console.log(img_6);
    await browser.close();

}

obter();