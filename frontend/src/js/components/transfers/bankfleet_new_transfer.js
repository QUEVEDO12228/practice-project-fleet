document.addEventListener("DOMContentLoaded", function () {
    const TableTransferConfirmationContainer = document.querySelector(".bankfleet-new-transfer-container");
    if (!TableTransferConfirmationContainer) {console.warn("No se encontró '.transfer-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/transfers/bankfleet_new_transfer.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_new_transfer.html");}return response.text();})
        .then(data => {TableTransferConfirmationContainer.innerHTML = data;
            initTransferMethod();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});