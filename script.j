function mostrarVisualizacion() {
  var visualizacion = document.getElementById("visualizacion").value;
  var visualizacionTitulo = document.getElementById("visualizacion-titulo");
  var grafica = document.getElementById("grafica");

  if (visualizacion === "tabla") {
    visualizacionTitulo.textContent = "Visualización - Tabla";
    // Mostrar la tabla con datos aleatorios
    
    var tablaHTML = "<table><tr><th colspan='5'  style='text-align: center;'>Tabla sobre el resumen de uso</th></tr><tr><th>Hora</th><th>Cantidad (litros)</th><th>Tipo de Consumo</th><th>Fuente de Agua</th><th>Eficiencia de Uso</th></tr>";
    for (var hora = 4; hora <= 24; hora += 2) {
      var cantidad = Math.floor(Math.random() * 15) + 1; // Generar cantidad aleatoria entre 1 y 15 litros
      var tipoConsumo = "Domestico";
      var fuenteAgua = "Red Pública";
      var eficienciaUso = Math.random() < 0.5 ? "Eficiente" : "Ineficiente"; // Generar eficiencia aleatoria
      tablaHTML += "<tr><td>" + hora + ":00</td><td>" + cantidad + "</td><td>" + tipoConsumo + "</td><td>" + fuenteAgua + "</td><td>" + eficienciaUso + "</td></tr>";
    }
    tablaHTML += "</table>";
    grafica.innerHTML = tablaHTML;
  } else if (visualizacion === "grafica") {
    visualizacionTitulo.textContent = "Visualización - Gráfica de Pastel";
    
    // Mostrar la gráfica de pastel con datos de consumo por hora
    grafica.innerHTML = '<canvas id="myPieChart"></canvas>';
    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['4 AM', '6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM'],
        datasets: [{
          data: generarDatosPorHora(),
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff6600', '#33cc33', '#666699', '#ffcc00', '#993366', '#009999']
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'bottom'
        },
        responsive: false, // Desactiva la respuesta al tamaño de la ventana
        maintainAspectRatio: false, // No mantiene el aspect ratio
        width: 550, // Ancho personalizado
        height: 550 // Altura personalizada
      }
    });
  }
}

// Función para generar datos de consumo de agua por hora
function generarDatosPorHora() {
  var datos = [];
  for (var hora = 4; hora <= 24; hora += 2) {
    // Generar cantidad aleatoria entre 1 y 15 litros por hora
    datos.push(Math.floor(Math.random() * 15) + 1);
  }
  return datos;
}
