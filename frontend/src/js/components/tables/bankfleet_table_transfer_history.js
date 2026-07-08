document.addEventListener("DOMContentLoaded", function () {
    const TableTransferHistoryContainer = document.querySelector(".bankfleet-table-transfer-history-container");
    const FilterTransferHistoryContainer = document.querySelector(".bankfleer-global-table-filter-container");
    if (!TableTransferHistoryContainer) {console.warn("No se encontró '.bankfleet-table-transfer-history-container'");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_table_transfer_history.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_table_transfer_history.html");}return response.text();})
        .then(data => {TableTransferHistoryContainer.innerHTML = data;initTransferHistoryContainer();
            if (FilterTransferHistoryContainer) {
                fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
                    .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_global_table_filter.html");}return response.text();})
                    .then(filterHTML => {FilterTransferHistoryContainer.innerHTML = filterHTML;console.log("Filtro cargado correctamente");initBankfleetfilterDrawer();})
                    .catch(error => {console.error("Error cargando filtro:",error);});}})
        .catch(error => {console.error("Error cargando componente tabla:",error);});
});

function initTransferHistoryContainer(){
    const menus = document.querySelectorAll(".bankfleet-transactions-table-employee-menu");menus.forEach(menu => {const button = menu.querySelector(".bankfleet-transactions-table-employee-menu__btn");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    const menusPrimary = document.querySelectorAll(".bankfleet-transactions-table-employee-menu-primary");menusPrimary.forEach(menu => {const button = menu.querySelector(".bankfleet-transactions-table-employee-menu__btn-primary");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menusPrimary.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    document.addEventListener("click",function(){menus.forEach(menu => {menu.classList.remove("active");});menusPrimary.forEach(menu => {menu.classList.remove("active");});});
    }