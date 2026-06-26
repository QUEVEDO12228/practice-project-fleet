document.addEventListener("DOMContentLoaded", function () {
    const TablePaymentHistoryContainer = document.querySelector(".bankfleet-payroll-payment-history-component-container");
    if (!TablePaymentHistoryContainer) {console.warn("No se encontró '.bankfleet-payroll-payment-history-component-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/payroll_payment_history.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar payroll_payment_history.html");}return response.text();})
        .then(data => {TablePaymentHistoryContainer.innerHTML = data;
            attachLoginEvents();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});