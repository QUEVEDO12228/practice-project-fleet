document.addEventListener("DOMContentLoaded", function () {
    const TableEmployeManagementContainer = document.querySelector(".bankfleet-employee-management-table-container");
    if (!TableEmployeManagementContainer) {console.warn("No se encontró '.bankfleet-employee-management-table-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_employee_management_table.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_employee_management_table.html");}return response.text();})
        .then(data => {TableEmployeManagementContainer.innerHTML = data;
            initTableEmployeManagement();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initTableEmployeManagement() {
    const TableEmployeManagement = document.querySelector(".bankfleet-btn--primary");
    if (!TableEmployeManagement) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    TableEmployeManagement.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/dashboard/banking/electronic%20payroll/vista_bankfleet_employee_create.html";});
    
    const menus = document.querySelectorAll(".employee-menu");
    menus.forEach(menu => {const button = menu.querySelector(".employee-menu__btn");
        button.addEventListener("click", function(e) {e.stopPropagation();
            menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});
            menu.classList.toggle("active");});});
    document.addEventListener("click", () => {menus.forEach(menu => menu.classList.remove("active"));});

    const menusprimary = document.querySelectorAll(".employee-menu-primary");
    menusprimary.forEach(menuprimary => {const button = menuprimary.querySelector(".employee-menu__btn-primary");
        button.addEventListener("click", function(e) {e.stopPropagation();
            menusprimary.forEach(item => {if(item !== menuprimary){item.classList.remove("active");}});
            menuprimary.classList.toggle("active");});});
    document.addEventListener("click", () => {menusprimary.forEach(menuprimary => menuprimary.classList.remove("active"));});
}
