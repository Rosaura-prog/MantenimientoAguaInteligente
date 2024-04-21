function mostrarVisualizacion() {
    var visualizacion = document.getElementById("visualizacion").value;
    var visualizacionTitulo = document.getElementById("visualizacion-titulo");
    var grafica = document.getElementById("grafica");
  
    if (visualizacion === "tabla") {
      visualizacionTitulo.textContent = "Visualización - Tabla";
      // Mostrar la tabla con datos aleatorios
      var tablaHTML = "<table><tr><th>Hora</th><th>Cantidad (litros)</th><th>Tipo de Consumo</th><th>Fuente de Agua</th><th>Eficiencia de Uso</th></tr>";
      for (var hora = 8; hora <= 24; hora += 2) {
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
      // Mostrar la gráfica de pastel con datos aleatorios
      grafica.innerHTML = '<canvas id="myPieChart"></canvas>';
      var ctx = document.getElementById('myPieChart').getContext('2d');
      var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
          datasets: [{
            data: generarDatosAleatorios(),
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
          }]
        },
        options: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      });
      // Ajustar tamaño del canvas
      grafica.firstChild.style.width = "200px";
      grafica.firstChild.style.height = "200px";
    }
  }
  
  function simularDatos() {
    // Simulación de datos aleatorios entre ciertos rangos
    var flujo = (Math.random() * (150 - 50) + 50).toFixed(2); // Entre 50 y 150 litros/minuto
    var presion = (Math.random() * (90 - 70) + 70).toFixed(2); // Entre 70 y 90 psi
    var consumo = (Math.random() * (250 - 150) + 150).toFixed(2); // Entre 150 y 250 litros
    // Mostrar los datos simulados en los campos de entrada
    document.getElementById("flujo").value = flujo;
    document.getElementById("presion").value = presion;
    document.getElementById("consumo").value = consumo;
}

function detectarAnomalias() {
    // Obtener los valores de flujo, presión y consumo
    var flujo = parseFloat(document.getElementById("flujo").value);
    var presion = parseFloat(document.getElementById("presion").value);
    var consumo = parseFloat(document.getElementById("consumo").value);
    
    // Algoritmo de detección de anomalías
    if (flujo > 100 || presion > 80 || consumo > 200) {
        alert("Posible presencia de fugas detectada. Se recomienda revisar el sistema.");
    } else {
        alert("No se detectaron anomalías en el sistema de agua.");
    }
}