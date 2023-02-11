
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


// CHART HECHA CON CANVAS
// URL de la API ficticia de JSON Placeholder
var url = 'https://jsonplaceholder.typicode.com/posts';

// Arreglo para almacenar los datos de ventas
var salesData = [];

// Realiza una solicitud GET a la API
fetch(url)
  .then(response => response.json())
  .then(data => {
	// Recorre los datos devueltos por la API
	data.forEach(sale => {
	  // Agrega los detalles de la venta a salesData
	  salesData.push({
		month: sale.id % 12,
		sales: sale.body.length
	  });
	});

	// Crea el gráfico de barras
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		datasets: [{
		  label: 'Ventas de Bitcoin por Mes',
		  data: salesData.reduce((acc, sale) => {
			acc[sale.month] = (acc[sale.month] || 0) + sale.sales;
			return acc;
		  }, []),
		  backgroundColor: 'rgba(255, 99, 132, 0.2)',
		  borderColor: 'rgba(255, 99, 132, 1)',
		  borderWidth: 1
		}]
	  },
	  options: {
		scales: {
		  yAxes: [{
			ticks: {
			  beginAtZero: true
			}
		  }]
		}
	  }
	});
  });
