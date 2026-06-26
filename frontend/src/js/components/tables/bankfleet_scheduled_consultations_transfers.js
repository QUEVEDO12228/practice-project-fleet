document.addEventListener("DOMContentLoaded", function () {
    const TableScheduledConsultationsTransfersContainer = document.querySelector(".bankfleet-scheduled-consultations-transfers-component-container");
    if (!TableScheduledConsultationsTransfersContainer) {console.warn("No se encontró '.bankfleet-scheduled-consultations-transfers-component-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_scheduled_consultations_transfers.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_scheduled_consultations_transfers.html");}return response.text();})
        .then(data => {TableScheduledConsultationsTransfersContainer.innerHTML = data;
            attachLoginEvents();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});