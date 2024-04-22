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
