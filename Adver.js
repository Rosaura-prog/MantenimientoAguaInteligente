var pipeWarnings = [];

function displayWarnings() {
    var warningsContainer = document.getElementById("warnings");
    warningsContainer.innerHTML = ""; // Limpiar contenido anterior

    pipeWarnings.forEach(function(warning) {
        var warningDiv = document.createElement("div");
        warningDiv.className = "warning";
        warningDiv.innerHTML = "<strong>Ubicación:</strong> " + warning.location + "<br><strong>Problema:</strong> " + warning.issue;
        warningsContainer.appendChild(warningDiv);
    });
}

function addWarning() {
    var locationInput = document.getElementById("locationInput");
    var issueInput = document.getElementById("issueInput");

    var location = locationInput.value;
    var issue = issueInput.value;

    if (location.trim() !== "" && issue.trim() !== "") {
        pipeWarnings.push({ location: location, issue: issue });
        // Limpiar campos después de agregar la advertencia
        locationInput.value = "";
        issueInput.value = "";
        // Mostrar advertencias después de agregar una nueva advertencia
        displayWarnings();
    } else {
        alert("Por favor ingresa una ubicación y un problema para agregar la advertencia.");
    }
}
