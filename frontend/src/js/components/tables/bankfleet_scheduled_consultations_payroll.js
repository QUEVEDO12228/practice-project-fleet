document.addEventListener("DOMContentLoaded", function () {
    const TableScheduledConsultationsPayrollContainer = document.querySelector(".bankfleet-scheduled-consultations-component-container");
    if (!TableScheduledConsultationsPayrollContainer) {console.warn("No se encontró '.bankfleet-scheduled-consultations-component-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_scheduled_consultations_payroll.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_scheduled_consultations_payroll.html");}return response.text();})
        .then(data => {TableScheduledConsultationsPayrollContainer.innerHTML = data;
            initForgot();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});