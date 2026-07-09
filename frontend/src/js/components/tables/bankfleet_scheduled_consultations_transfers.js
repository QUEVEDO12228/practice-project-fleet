document.addEventListener("DOMContentLoaded", function () {
    const TableScheduledConsultationsTransfersContainer = document.querySelector(".bankfleet-scheduled-consultations-transfers-component-container");
    const FilterScheduledConsultationsTransfersContainer = document.querySelector(".bankfleer-global-table-filter-container");
    if (!TableScheduledConsultationsTransfersContainer) {console.warn("No se encontró '.bankfleet-scheduled-consultations-transfers-component-container'");return;}
    fetch("/frontend/src/html/components/transfers/tables/bankfleet_scheduled_consultations_transfers.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_scheduled_consultations_transfers.html");}return response.text();})
        .then(data => {TableScheduledConsultationsTransfersContainer.innerHTML = data;initScheduledConsultationsTransfersContainer();
            if (FilterScheduledConsultationsTransfersContainer) {
                fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
                    .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_global_table_filter.html");}return response.text();})
                    .then(filterHTML => {FilterScheduledConsultationsTransfersContainer.innerHTML = filterHTML;console.log("Filtro cargado correctamente");initBankfleetfilterDrawer();})
                    .catch(error => {console.error("Error cargando filtro:",error);});}})
        .catch(error => {console.error("Error cargando componente tabla:",error);});
});

function initScheduledConsultationsTransfersContainer(){
    const menus = document.querySelectorAll(".bankfleet-scheduled-queries-table-employee-menu");menus.forEach(menu => {const button = menu.querySelector(".bankfleet-scheduled-queries-table-employee-menu__btn");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    const menusPrimary = document.querySelectorAll(".bankfleet-scheduled-queries-table-employee-menu-primary");menusPrimary.forEach(menu => {const button = menu.querySelector(".bankfleet-scheduled-queries-table-employee-menu__btn-primary");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menusPrimary.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    document.addEventListener("click",function(){menus.forEach(menu => {menu.classList.remove("active");});menusPrimary.forEach(menu => {menu.classList.remove("active");});});
}