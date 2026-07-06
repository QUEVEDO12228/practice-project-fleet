document.addEventListener("DOMContentLoaded", function () {
    const TableManageGroupContainer = document.querySelector(".bankfleet-manage-groups-component-container");
    if (!TableManageGroupContainer) {console.warn("No se encontró '.bankfleet-manage-groups-component-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_manage_groups.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_manage_groups.html");}return response.text();})
        .then(data => {TableManageGroupContainer.innerHTML = data;
            initTableManagementGroups(), initDropdownFilter();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initTableManagementGroups() {
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
function initDropdownFilter() {
    const filterButton = document.querySelector(".bankfleet-navbar__action-button");
    const drawer = document.querySelector(".bankfleet-filter-drawer");
    const overlay = document.querySelector(".bankfleet-filter-overlay");
    const closeButton = document.querySelector(".bankfleet-filter-drawer__close");
    if (!filterButton || !drawer || !overlay) return;
    filterButton.addEventListener("click", () => {
        drawer.classList.add("bankfleet-filter-drawer--active");
        overlay.classList.add("bankfleet-filter-overlay--active");
    });
    closeButton?.addEventListener("click", closefilter);
    overlay.addEventListener("click", closefilter);
    function closefilter() {drawer.classList.remove("bankfleet-filter-drawer--active"); overlay.classList.remove("bankfleet-filter-overlay--active");}
}