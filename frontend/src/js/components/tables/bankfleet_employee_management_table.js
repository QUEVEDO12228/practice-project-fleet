// ================================
// CARGAR COMPONENTE
// ================================
export async function loadManageEmployeTable() {
    const container = document.querySelector(".bankfleet-employee-management-table-container");
    if (!container) {console.warn("No se encontró '.bankfleet-employee-management-table-container'.");return;}
    const response = await fetch("/frontend/src/html/components/electronic payroll/tables/bankfleet_employee_management_table.html");
    if (!response.ok) {throw new Error("Error al cargar bankfleet_employee_management_table.html");}container.innerHTML = await response.text();
}
export function initTableManagementEmployee() {
    // ==========================
    // MENÚS SECUNDARIOS
    // ==========================
    const menus = document.querySelectorAll(".bankfleet-employees-table-employee-menu");
    menus.forEach(menu => {const button = menu.querySelector(".bankfleet-employees-table-employee-menu__btn");
        if (!button) return;button.addEventListener("click", function (e) {e.stopPropagation();menus.forEach(item => {
            if (item !== menu) {item.classList.remove("active");}});menu.classList.toggle("active");});});
    // ==========================
    // MENÚ PRINCIPAL
    // ==========================
    const menusPrimary = document.querySelectorAll(".bankfleet-employees-table-employee-menu-primary");
    menusPrimary.forEach(menu => {const button = menu.querySelector(".bankfleet-employees-table-employee-menu__btn-primary");
        if (!button) return;button.addEventListener("click", function (e) {e.stopPropagation();menusPrimary.forEach(item => {
            if (item !== menu) {item.classList.remove("active");}});menu.classList.toggle("active");});});
    // ==========================
    // CERRAR MENÚS
    // ==========================
    document.addEventListener("click", function () {menus.forEach(menu => {menu.classList.remove("active");});
        menusPrimary.forEach(menu => {menu.classList.remove("active");});});
    // ==========================
    // BOTÓN AGREGAR EMPLEADO
    // ==========================
    const btnAddEmployee = document.querySelector(".bankfleet-manage-groups__btn-add-employee");
    if (btnAddEmployee) {btnAddEmployee.addEventListener("click", function (e) {e.preventDefault();window.location.href ="/frontend/src/html/pages/dashboard/banking/electronic%20payroll/vista_bankfleet_employee_create.html";});}
}