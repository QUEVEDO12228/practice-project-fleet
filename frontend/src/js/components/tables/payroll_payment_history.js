document.addEventListener("DOMContentLoaded", function () {
    const TablePaymentHistoryContainer = document.querySelector(".bankfleet-payroll-payment-history-component-container");
    const FilterScheduledConsultationsTransfersContainer = document.querySelector(".bankfleer-global-table-filter-container");
    if (!TablePaymentHistoryContainer) {console.warn("No se encontró '.bankfleet-payroll-payment-history-component-container'");return;}
    fetch("/frontend/src/html/components/electronic payroll/tables/payroll_payment_history.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar payroll_payment_history.html");}return response.text();})
        .then(data => {TablePaymentHistoryContainer.innerHTML = data;initPaymentHistoryContainer();
            if (FilterScheduledConsultationsTransfersContainer) {
                fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
                    .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_global_table_filter.html");}return response.text();})
                    .then(filterHTML => {FilterScheduledConsultationsTransfersContainer.innerHTML = filterHTML;console.log("Filtro cargado correctamente");initBankfleetfilterDrawer();})
                    .catch(error => {console.error("Error cargando filtro:",error);});}})
        .catch(error => {console.error("Error cargando componente tabla:",error);});
});

function initPaymentHistoryContainer(){
    const menus = document.querySelectorAll(".payroll-payment-history-table-employee-menu");menus.forEach(menu => {const button = menu.querySelector(".payroll-payment-history-table-employee-menu__btn");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menus.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    const menusPrimary = document.querySelectorAll(".payroll-payment-history-table-employee-menu-primary");menusPrimary.forEach(menu => {const button = menu.querySelector(".payroll-payment-history-table-employee-menu__btn-primary");
        if(!button) return;button.addEventListener("click",function(e){e.stopPropagation();menusPrimary.forEach(item => {if(item !== menu){item.classList.remove("active");}});menu.classList.toggle("active");});});
    document.addEventListener("click",function(){menus.forEach(menu => {menu.classList.remove("active");});menusPrimary.forEach(menu => {menu.classList.remove("active");});});
    }