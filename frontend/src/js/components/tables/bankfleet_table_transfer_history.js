document.addEventListener("DOMContentLoaded", function () {
    const TableTransferHistoryContainer = document.querySelector(".bankfleet-table-transfer-history-container");
    if (!TableTransferHistoryContainer) {console.warn("No se encontró '.bankfleet-table-transfer-history-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_table_transfer_history.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_table_transfer_history.html");}return response.text();})
        .then(data => {TableTransferHistoryContainer.innerHTML = data;
            attachLoginEvents();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});