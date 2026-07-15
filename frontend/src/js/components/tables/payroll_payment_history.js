export async function loadPayrollPaymentHistoryTable() {
    const TablePaymentHistoryContainer = document.querySelector(".bankfleet-payroll-payment-history-component-container");
    if (!TablePaymentHistoryContainer) {console.warn("No se encontró '.bankfleet-payroll-payment-history-component-container'.");return;}
    const response = await fetch("/frontend/src/html/components/electronic payroll/tables/payroll_payment_history.html");
    if (!response.ok) {throw new Error("Error al cargar payroll_payment_history.html");}TablePaymentHistoryContainer.innerHTML = await response.text();
}
export function initTablePayrollPaymentHistory() {
    // ==========================
    // MENÚS SECUNDARIOS
    // ==========================
    const menus = document.querySelectorAll(".payroll-payment-history-table-employee-menu");
    menus.forEach(menu => {const button = menu.querySelector(".payroll-payment-history-table-employee-menu__btn");
        if (!button) return;button.addEventListener("click", function (e) {e.stopPropagation();menus.forEach(item => {
            if (item !== menu) {item.classList.remove("active");}});menu.classList.toggle("active");});});
    // ==========================
    // MENÚ PRINCIPAL
    // ==========================
    const menusPrimary = document.querySelectorAll(".payroll-payment-history-table-employee-menu-primary");
    menusPrimary.forEach(menu => {const button = menu.querySelector(".payroll-payment-history-table-employee-menu__btn-primary");
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