document.addEventListener("DOMContentLoaded", function () {
    const TableManageGroupContainer = document.querySelector(".bankfleet-manage-groups-component-container");
    const FilterContainer = document.querySelector(".bankfleer-global-table-filter-container");
    if (!TableManageGroupContainer) {console.warn("No se encontró '.bankfleet-manage-groups-component-container'");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_manage_groups.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_manage_groups.html");}return response.text();})
        .then(data => {TableManageGroupContainer.innerHTML = data;initTableManagementGroups();if (FilterContainer) {
                fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
                    .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_global_table_filter.html");}return response.text();})
                    .then(filterHTML => {FilterContainer.innerHTML = filterHTML;console.log("Filtro cargado correctamente");initBankfleetfilterDrawer();})
                    .catch(error => {console.error("Error cargando filtro:",error);});}})
        .catch(error => {console.error("Error cargando componente tabla:",error);});
});

function initTableManagementGroups(){
    const menus = document.querySelectorAll(".employee-menu");menus.forEach(menu => {const button = menu.querySelector(".employee-menu__btn");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    const menusPrimary = document.querySelectorAll(".employee-menu-primary");menusPrimary.forEach(menu => {const button = menu.querySelector(".employee-menu__btn-primary");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menusPrimary.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    document.addEventListener("click",function(){menus.forEach(menu => {menu.classList.remove("active");});menusPrimary.forEach(menu => {menu.classList.remove("active");});});
    const BtnPrimaryAddEmployee = document.querySelector(".bankfleet-btn--primary");
    if (!BtnPrimaryAddEmployee) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    BtnPrimaryAddEmployee.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/dashboard/banking/electronic%20payroll/vista_bankfleet_employee_create.html";});
}