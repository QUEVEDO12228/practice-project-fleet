document.addEventListener("DOMContentLoaded", function () {
    const TableTransferConfirmationContainer = document.querySelector(".bankfleet-alert-transfer-confirmation-container");
    if (!TableTransferConfirmationContainer) {console.warn("No se encontró '.bankfleet-alert-transfer-confirmation-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/transfers/alerts/bankfleet_transfers_confirmation.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_transfers_confirmation.html");}return response.text();})
        .then(data => {TableTransferConfirmationContainer.innerHTML = data;
            initTransferMethod();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});