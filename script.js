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


//NOTIFICACIONES DE FUGAS
// Función para mostrar una ventana emergente
function mostrarVentanaEmergente(mensaje) {
  alert(mensaje); // Utilizamos la función 'alert' para mostrar la ventana emergente con el mensaje
}

// Función para notificar una fuga
function notificarFuga(fecha) {
  const mensaje = `Se ha detectado una fuga en un punto de monitoreo. Fecha: ${fecha.toLocaleString()}`;
  mostrarVentanaEmergente(mensaje); // Mostramos la ventana emergente con el mensaje de la fuga
}

// Función para simular una fuga
function simularFuga() {
  const flujo = Math.random() * 10; // Simulación de flujo de agua
  const presion = Math.random() * 100; // Simulación de presión de agua
  const consumo = Math.random() * 50; // Simulación de consumo de agua
  
  // Definir los valores límite para considerar que los parámetros son anormales
  const flujoLimiteInferior = 1.5; // L/min
  const flujoLimiteSuperior = 12; // L/min
  const presionLimiteInferior = 40; // psi
  const presionLimiteSuperior = 80; // psi
  const consumoLimiteInferior = 50; // litros por día
  const consumoLimiteSuperior = 100; // litros por día
  
  // Verificar si alguno de los parámetros está fuera de los límites normales
  if (flujo < flujoLimiteInferior || flujo > flujoLimiteSuperior ||
      presion < presionLimiteInferior || presion > presionLimiteSuperior ||
      consumo < consumoLimiteInferior || consumo > consumoLimiteSuperior) {
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Notificar la fuga con la fecha actual
    notificarFuga(fechaActual);
  }
}

// Actualizar automáticamente los valores de los campos cada 5 segundos
setInterval(function() {
  // Obtener los valores de los campos
  const flujo = Math.random() * 10; // Simulación de flujo de agua
  const presion = Math.random() * 100; // Simulación de presión de agua
  const consumo = Math.random() * 50; // Simulación de consumo de agua

  // Actualizar los campos
  document.getElementById('flujo').value = flujo.toFixed(2);
  document.getElementById('presion').value = presion.toFixed(2);
  document.getElementById('consumo').value = consumo.toFixed(2);

  // Llamar a la función para simular una fuga
  simularFuga();
}, 5000); // Actualizar cada 5 segundos


