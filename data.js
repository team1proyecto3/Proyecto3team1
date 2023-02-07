
import fetch from 'node-fetch'
globalThis.fetch = fetch
//Bitcoin
let urlBitcoin = 'https://newsapi.org/v2/everything?q=bitcoin';

function init(){
    getDataApple(urlApple),
    getDataBitcoin(urlBitcoin),
    getDataBusines(urlBusiness)
   getDataTech(urlTechCrunch)
}


//Función para obtener los articulos referentes a bitcoin
const getDataBitcoin = async (urlBitcoin) => {
    const response = await fetch(urlBitcoin, {
       headers: {
            'x-api-key': '9d2948fc7fe44af28e2ad315bf58d64c',
            'Accept': '*/*',
        }
    })
    //console.log('responde', response)
    const data = await response.json()
    //console.log(data);
    //dataArticlesBitcoin = data.articles;
    //console.log('array',dataArticlesBitcoin)
}



//Apple
let urlApple = 'https://newsapi.org/v2/everything?q=apple&from=2023-02-04&to=2023-02-04&sortBy=popularity'
let dataArticleApple = {};

//Función para encontrar los articulos de apple
const getDataApple = async (urlApple) => {
   const response = fetch(urlApple,{
        headers: {
            'x-api-key': '9d2948fc7fe44af28e2ad315bf58d64c',
            'Accept': '*/*',
        }
    })
        .then((response) => response.json())
        .then(function (data) { 
            dataArticleApple = data.articles;
           //console.log(dataArticleApple)
         })
        .catch(error => console.log(error))
}

//Business USA
let urlBusiness='https://newsapi.org/v2/top-headlines?country=us&category=business'
let articleBusiness = {}

//Función para encontrar los articulos de Busines de USA
const getDataBusines = async (urlBusiness) => {
    await fetch(urlBusiness,{
        headers: {
            'x-api-key': '9d2948fc7fe44af28e2ad315bf58d64c',
            'Accept': '*/*',
        }
    })
        .then((response) => response.json())
        .then(function (data) { 
            articleBusiness = data.articles;
           //console.log(articleBusiness)
         })
        .catch(error => console.log(error))
}

//Tech
let urlTechCrunch='https://newsapi.org/v2/top-headlines?sources=techcrunch'
 let articleTech = {}

// //Función para encontrar Los principales titulares de TechCrunch ahora mismo
function  datos()  {
    fetch(urlTechCrunch,{
        headers: {
            'x-api-key': '9d2948fc7fe44af28e2ad315bf58d64c',
            'Accept': '*/*',
        }
    })
        .then((response) => response.json())
        .then(function (data) { 
            articleTech = data.articles;
    
         })
        .catch(error => console.log(error))
}
 init()



