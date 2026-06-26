document.addEventListener("DOMContentLoaded", function () {
    const TableRecipientsContainer = document.querySelector(".bankfleet-recipients-component-container");
    if (!TableRecipientsContainer) {console.warn("No se encontró '.bankfleet-recipients-component-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_recipients.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_recipients.html");}return response.text();})
        .then(data => {TableRecipientsContainer.innerHTML = data;
            initForgot();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});