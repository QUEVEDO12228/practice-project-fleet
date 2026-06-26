document.addEventListener("DOMContentLoaded", function () {
    const sidebarPrimaryContainer = document.querySelector(".sidebar-container");
    if (!sidebarPrimaryContainer) {console.warn("No se encontró '.sidebar-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/siderbars/bankfleet_sidebar_principal.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_sidebar_principal.html");}return response.text();})
        .then(data => {sidebarPrimaryContainer.innerHTML = data;
            initIndexSidebar(); initSidebarPrincipal(); ocultarOpcionActual();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initIndexSidebar() {
    const botones = document.querySelectorAll(".bankfleet-sidebar-principal__menu-button");
    if (botones.length === 0) {console.error("No encontré botones del menú.");return;}
    botones[0].addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/home/vista_home_client.html";});
}
function initSidebarPrincipal() {
    const menuButtons = document.querySelectorAll(".bankfleet-sidebar-principal__menu-button");
    menuButtons.forEach(button => {button.addEventListener("click", function () {
            const submenu = this.nextElementSibling;
            if (!submenu || !submenu.classList.contains("bankfleet-sidebar-principal__submenu")) {return;}
            const isOpen = submenu.classList.contains("active");
            document.querySelectorAll(".bankfleet-sidebar-principal__submenu").forEach(menu => menu.classList.remove("active"));
            document.querySelectorAll(".bankfleet-sidebar-principal__menu-button").forEach(btn => btn.classList.remove("active"));
            if (!isOpen) {submenu.classList.add("active");this.classList.add("active");
            }
        });
    });
}
const SIDEBAR_CONFIG = {
    "/frontend/src/html/pages/home/vista_home_client.html": {hideMenu: "Inicio"},
    "/frontend/src/html/pages/dashboard/banking/transfers/cards/vista_bankfleet_new_transfer.html": {hideLinks: [    "Nueva Transferencia (Ejecución)"]},
    "/frontend/src/html/pages/dashboard/banking/transfers/tables/view_bankfleet_table_transfer_history.html": {hideLinks: ["Historial y Comprobantes"]},
    "/frontend/src/html/pages/dashboard/banking/transfers/tables/view_bankfleet_table_transfer_history.html": {hideLinks: ["Historial de transferencias"]},  
    "/frontend/src/html/pages/dashboard/banking/transfers/tables/view_bankfleet_scheduled_consultations_transfers.html": {hideLinks: ["Consultas programadas"]},
    "/frontend/src/html/pages/dashboard/banking/transfers/tables/view_bankfleet_recipients.html": {hideLinks: ["Gestión de Destinatarios y Favoritos"]},
    "/frontend/src/html/pages/dashboard/banking/transfers/tables/view_functions_security.html": {hideLinks: ["Seguridad y Funciones Especiales"]},
    "/frontend/src/html/pages/dashboard/banking/payrollpayment/tables/view_bankfleet_manage_groups.html": {hideLinks: ["Administrar grupos"]},
    "/frontend/src/html/pages/dashboard/banking/payrollpayment/tables/view_bankfleet_employee_management_table.html": {hideLinks: ["Administrar empleados"]},
    "/frontend/src/html/pages/dashboard/banking/payrollpayment/tables/view_payroll_payment_history.html": {hideLinks: ["Historial de pagos de nómina"]},
    "/frontend/src/html/pages/dashboard/banking/payrollpayment/tables/view_bankfleet_scheduled_consultations_payroll.html": {hideLinks: ["Consultas programadas"]},
    "/frontend/src/html/pages/dashboard/banking/electronic%20payroll/view_bankfleet_dian.html": {hideLinks: ["Transmi automática a la DIAN"]}
};
function ocultarOpcionActual() {
    const currentPage = window.location.pathname;
    const config = SIDEBAR_CONFIG[currentPage];
    if (!config) return;
    if (config.hideMenu) {
        document.querySelectorAll(".bankfleet-sidebar-principal__group").forEach(group => {
                const button = group.querySelector(".bankfleet-sidebar-principal__menu-button");if (!button) return;
                const texto = button.textContent.trim();if (texto === config.hideMenu) {group.style.display = "none";}
            });
    }
    if (config.hideLinks) {
        document.querySelectorAll(".bankfleet-sidebar__link").forEach(link => {
                const texto = link.textContent.trim();if (config.hideLinks.includes(texto)) {link.style.display = "none";}
            });
    }
}