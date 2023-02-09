// const results = require('./data');

/** Este es el grafico de lineas... no rifa tanto como el de pastel/donut */
// const chartResults = ()=> {
//     let options = {
//         chart: {
//           type: 'line'
//         },
//         stroke: {
//             curve: 'smooth',
//           }
//         ,
//         series: [{
//           name: 'Total Results',
//           data: ['13651', '58726', '192526', '61117']
//         }],
//         xaxis: {
//           categories: ['Bitcoin', 'Apple', 'Business', 'Tech']
//         }
//       }
      
//       var chart = new ApexCharts(document.querySelector("#chart"), options);
      
//       chart.render();
// }

// Resultados totales
//data: ['13651', '58726', '192526', '61117']

// total % bitcoin



/* Totales busquedas */
/* Nota: intente hacer el import para usar los resultados de las busquedas en el archivo 'data.js', pero sin exito :( */
let totalBitcoin = (13651*100)/326020;
console.log(totalBitcoin)

// Total apple 
let totalApple = (58726*100)/326020;
console.log(totalApple);

// total business 
let totalBusiness = (192526*100)/326020; 
console.log(totalBusiness)

// total Tech
let totalTech = (61117*100)/326020;
console.log(totalTech);

// total
let total = totalBitcoin + totalApple + totalBusiness + totalTech;
console.log(total)


var options = {
    chart: {
      height: 500,
      type: "donut",
    },
    series: [totalBitcoin , totalApple , totalBusiness , totalTech],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Resultados Totales'
          }
        }
      }
    },
    labels: ['Bitcoin', 'Apple', 'Business', 'Tech']
  };
  
new ApexCharts(document.querySelector("#chart"), options).render();



/*
  Solo falta termina el 'import' y 'export' ya que me manda errror al intentar usar las palabras reservadas
  // AIIUDA !!!! 
*/