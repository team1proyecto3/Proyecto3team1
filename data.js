
//Api fiticia para conseguir el numero total de noticias

const getNoticias = async() =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const datos = await response.json()
  console.log(datos[0].body.length)
  const bit = datos[0].body.length
  const app = datos[1].body.length
  const negocios = datos[2].body.length
  const  tecnologia = datos[3].body.length
 //Imprimir bit coin en html 
 const printBitcoinHtml = document.querySelector('.info-bitcoin');
 printBitcoinHtml.innerHTML = bit;
 //Imprimir resultados apple  en html 
 const printAppleHtml = document.querySelector('.info-apple');
 printAppleHtml.innerHTML = app;
 //Imprimir resultados negocios  en html 
 const printBusinessHtml = document.querySelector('.info-business');
 printBusinessHtml.innerHTML = negocios;
  //Imprimir resultados tecnologia  en html 
  const printTecnologiaHtml = document.querySelector('.info-tech');
  printTecnologiaHtml.innerHTML = tecnologia;
}

getNoticias()

