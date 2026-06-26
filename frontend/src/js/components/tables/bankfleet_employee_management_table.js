document.addEventListener("DOMContentLoaded", function () {
    const TableEmployeManagementContainer = document.querySelector(".bankfleet-employee-management-table-container");
    if (!TableEmployeManagementContainer) {console.warn("No se encontró '.bankfleet-employee-management-table-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_employee_management_table.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_employee_management_table.html");}return response.text();})
        .then(data => {TableEmployeManagementContainer.innerHTML = data;
            initForgot();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});