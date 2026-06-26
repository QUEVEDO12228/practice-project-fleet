document.addEventListener("DOMContentLoaded", function () {
    const DianAutomaticationContainer = document.querySelector(".bankfleet-dian-container");
    if (!DianAutomaticationContainer) {console.warn("No se encontró '.bankfleet-manage-groups-component-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/electronic payroll/bankfleet_dian.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_dian.html");}return response.text();})
        .then(data => {DianAutomaticationContainer.innerHTML = data;
            initForgot();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});