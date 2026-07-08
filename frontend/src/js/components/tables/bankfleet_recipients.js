document.addEventListener("DOMContentLoaded", function () {
    const TableRecipientsContainer = document.querySelector(".bankfleet-recipients-component-container");
    const FilterScheduledConsultationsTransfersContainer = document.querySelector(".bankfleer-global-table-filter-container");
    if (!TableRecipientsContainer) {console.warn("No se encontró '.bankfleet-recipients-component-container'");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_recipients.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_recipients.html");}return response.text();})
        .then(data => {TableRecipientsContainer.innerHTML = data;initTableRecipients();
            if (FilterScheduledConsultationsTransfersContainer) {
                fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
                    .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_global_table_filter.html");}return response.text();})
                    .then(filterHTML => {FilterScheduledConsultationsTransfersContainer.innerHTML = filterHTML;console.log("Filtro cargado correctamente");initBankfleetfilterDrawer();})
                    .catch(error => {console.error("Error cargando filtro:",error);});}})
        .catch(error => {console.error("Error cargando componente tabla:",error);});
});

function initTableRecipients(){
    const menus = document.querySelectorAll(".bankfleet-recipients-table-employee-menu");menus.forEach(menu => {const button = menu.querySelector(".bankfleet-recipients-table-employee-menu__btn");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    const menusPrimary = document.querySelectorAll(".bankfleet-recipients-table-employee-menu-primary");menusPrimary.forEach(menu => {const button = menu.querySelector(".bankfleet-recipients-table-employee-menu__btn-primary");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menusPrimary.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    document.addEventListener("click",function(){menus.forEach(menu => {menu.classList.remove("active");});menusPrimary.forEach(menu => {menu.classList.remove("active");});});
}