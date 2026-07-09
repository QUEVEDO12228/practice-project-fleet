document.addEventListener("DOMContentLoaded", function () {
    const TableScheduledConsultationsPayrollContainer = document.querySelector(".bankfleet-scheduled-consultations-component-container");
    const FilterScheduledConsultationsPayrollContainer = document.querySelector(".bankfleer-global-table-filter-container");
    if (!TableScheduledConsultationsPayrollContainer) {console.warn("No se encontró '.bankfleet-scheduled-consultations-component-container'");return;}
    fetch("/frontend/src/html/components/electronic payroll/tables/bankfleet_scheduled_consultations_payroll.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_scheduled_consultations_payroll.html");}return response.text();})
        .then(data => {TableScheduledConsultationsPayrollContainer.innerHTML = data;initScheduledConsultationsPayroll();
            if (FilterScheduledConsultationsPayrollContainer) {
                fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
                    .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_global_table_filter.html");}return response.text();})
                    .then(filterHTML => {FilterScheduledConsultationsPayrollContainer.innerHTML = filterHTML;console.log("Filtro cargado correctamente");initBankfleetfilterDrawer();})
                    .catch(error => {console.error("Error cargando filtro:",error);});}})
        .catch(error => {console.error("Error cargando componente tabla:",error);});
});

function initScheduledConsultationsPayroll(){
    const menus = document.querySelectorAll(".bankfleet_scheduled_consultations-table-employee-menu");menus.forEach(menu => {const button = menu.querySelector(".bankfleet_scheduled_consultations-table-employee-menu__btn");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    const menusPrimary = document.querySelectorAll(".bankfleet_scheduled_consultations-table-employee-menu-primary");menusPrimary.forEach(menu => {const button = menu.querySelector(".bankfleet_scheduled_consultations-table-employee-menu__btn-primary");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menusPrimary.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    document.addEventListener("click",function(){menus.forEach(menu => {menu.classList.remove("active");});menusPrimary.forEach(menu => {menu.classList.remove("active");});});
}