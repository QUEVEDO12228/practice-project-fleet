document.addEventListener("DOMContentLoaded", function () {
    const TableEmployeManagementContainer = document.querySelector(".bankfleet-employee-management-table-container");
    const FilterScheduledConsultationsTransfersContainer = document.querySelector(".bankfleer-global-table-filter-container");
    if (!TableEmployeManagementContainer) {console.warn("No se encontró '.bankfleet-employee-management-table-container'");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_employee_management_table.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_employee_management_table.html");}return response.text();})
        .then(data => {TableEmployeManagementContainer.innerHTML = data;initTableEmployeManagement();
            if (FilterScheduledConsultationsTransfersContainer) {
                fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
                    .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_global_table_filter.html");}return response.text();})
                    .then(filterHTML => {FilterScheduledConsultationsTransfersContainer.innerHTML = filterHTML;console.log("Filtro cargado correctamente");initBankfleetfilterDrawer();})
                    .catch(error => {console.error("Error cargando filtro:",error);});}})
        .catch(error => {console.error("Error cargando componente tabla:",error);});
});

function initTableEmployeManagement(){
    const menus = document.querySelectorAll(".bankfleet-employees-table-employee-menu");menus.forEach(menu => {const button = menu.querySelector(".bankfleet-employees-table-employee-menu__btn");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    const menusPrimary = document.querySelectorAll(".bankfleet-employees-table-employee-menu-primary");menusPrimary.forEach(menu => {const button = menu.querySelector(".bankfleet-employees-table-employee-menu__btn-primary");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menusPrimary.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    document.addEventListener("click",function(){menus.forEach(menu => {menu.classList.remove("active");});menusPrimary.forEach(menu => {menu.classList.remove("active");});});
}