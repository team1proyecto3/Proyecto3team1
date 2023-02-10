
const apiKey = '353bd1fc1cfc4d66b96e320dae71fac9';


//163de2169e8044f4ab9ceb0b3a734024

// Bitcoin news
const dataBitcoin = async() => {
        const bitcoinName = 'bitcoin';
        // let url = `https://newsapi.org/v2/everything?q=${bitcoinName}&from=${octoberDate}&to=${novemberDate}&sortBy=popularity&apiKey=${apiKey}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=${argentinaCountry}&category=${bitcoinName}&apiKey=${apiKey}`;
        let url = `https://newsapi.org/v2/everything?q=${bitcoinName}&apiKey=${apiKey}`;


        
        const response = await fetch(url);
        const main = await response.json();
        console.log(main)  
        const { totalResults } = main; 
        const bitcoinResults = totalResults;

        //Imprimir en html 
        const printBitcoinHtml = document.querySelector('.info-bitcoin');
        printBitcoinHtml.innerHTML = bitcoinResults;
        console.log( 'Resultados Totales Bitcoin: ' + bitcoinResults );


        // Grafico 
    //     var options = {
    //         chart: {
    //           height: 200,
    //           width: 220,
    //           type: "donut",
    //         },
    //         series: [bitcoinResults],
    //         plotOptions: {
    //           radialBar: {
    //             dataLabels: {
    //               total: {
    //                 show: true,
    //                 label: 'Resultados Totales',
    //                 series: bitcoinResults
    //               }
    //             }
    //           }
    //         },
    //         labels: ['Bitcoin']
    //       };
          
    //     new ApexCharts(document.querySelector("#bitcoinResult"), options).render();

    }
    

// Apple news
const dataApple = async ()=> {
    const appleName = 'apple';
    let url = `https://newsapi.org/v2/everything?q=${appleName}&apiKey=${apiKey}`
        
    const response = await fetch(url);
    const main = await response.json();  
    const { totalResults } = main; 
    const appleResults = totalResults;
    
    // Imprimir en html
    const printAppleHtml = document.querySelector('.info-apple');
    printAppleHtml.innerHTML = appleResults;
    console.log( 'Resultados Totales Apple : ' + appleResults );


    // Grafico 
    // var options = {
    //     chart: {
    //         height: 200,
    //         width: 220,
    //         type: "donut",
    //     },
    //     series: [appleResults],
    //     plotOptions: {
    //         radialBar: {
    //         dataLabels: {
    //             total: {
    //             show: true,
    //             label: 'Resultados Totales',
    //             series: appleResults
    //             }
    //         }
    //         }
    //     },
    //     labels: [appleName]        
    // };
        
    // new ApexCharts(document.querySelector("#appleResult"), options).render();

}

// Business news
const dataBussinessUSA = async()=> {
    const bussinessName = 'business';
    let url = `https://newsapi.org/v2/everything?q=${bussinessName}&apiKey=${apiKey}`
        
    const response = await fetch(url);
    const main = await response.json();  
    const { totalResults } = main; 
    const businessResults = totalResults;

    // Imprimir en html
    const printBusinessHtml = document.querySelector('.info-business');
    printBusinessHtml.innerHTML = businessResults;
    console.log( 'Resultados Totales Bussiness : ' + businessResults );

    // Grafico 
    // var options = {
    //     chart: {
    //         height: 200,
    //         width: 220,
    //         type: "donut",
    //     },
    //     series: [businessResults],
    //     plotOptions: {
    //         radialBar: {
    //         dataLabels: {
    //             total: {
    //             show: true,
    //             label: 'Resultados Totales',
    //             series: businessResults
    //             }
    //         }
    //         }
    //     },
    //     labels: [bussinessName]        
    // };
        
    // new ApexCharts(document.querySelector("#businessResult"), options).render();

}

// tech news
const dataTech = async() => {
    const techName = 'tech'
    let url = `https://newsapi.org/v2/everything?q=${techName}&apiKey=${apiKey}`
        
    const response = await fetch(url);
    const main = await response.json();  
    const { totalResults } = main; 
    const techResults = totalResults;
    
    // Imprimir en html
    const printTechHtml = document.querySelector('.info-tech');
    printTechHtml.innerHTML = techResults;
    console.log( 'Resultados Totales Tech : ' + techResults );

    // Grafico 
    // var options = {
    //     chart: {
    //         height: 200,
    //         width: 220,
    //         type: "donut",
    //     },
    //     series: [techResults],
    //     plotOptions: {
    //         radialBar: {
    //         dataLabels: {
    //             total: {
    //             show: true,
    //             label: 'Resultados Totales',
    //             series: techResults
    //             }
    //         }
    //         }
    //     },
    //     labels: [techName]        
    // };
        
    // new ApexCharts(document.querySelector("#techResult"), options).render();
    // dasdsdasdsad
    const chartResults = ()=> {
        let options = {
            chart: {
              type: 'bar'
            },
            plotOptions: {
                bar: {
                  horizontal: true
                }
              }                
            ,
            series: [{
              name: 'Total Results',
              data: [techResults]
            }],
            xaxis: {
              categories: [techName]
            }
          }
          
          var chart = new ApexCharts(document.querySelector("#"), options);
          
          chart.render();
    }
    
    chartResults();

}


dataBitcoin();
dataApple();
dataBussinessUSA();
dataTech();

// module.exports = dataBitcoin();
// module.exports = dataApple();
// module.exports = dataBussinessUSA();
// module.exports = dataTech();