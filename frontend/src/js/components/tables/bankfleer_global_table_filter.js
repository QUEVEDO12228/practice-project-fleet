document.addEventListener("DOMContentLoaded", () => {const filterContainer = document.querySelector(".bankfleet-global-table-filter-container");
    if (!filterContainer) {console.warn("No existe el contenedor del filtro");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_global_table_filter.html")
        .then(res => {if(!res.ok){throw new Error("No se pudo cargar el filtro");}return res.text();})
        .then(html => {filterContainer.innerHTML = html;console.log("Drawer filtro cargado");initBankfleetfilterDrawer();})
        .catch(err => {console.error("Error cargando filtro:",err);});
});
function initBankfleetfilterDrawer(){
    const filterBtn = document.querySelector(".bankfleet-table-filter-btn");
    const overlay = document.querySelector(".bankfleet-filter-overlay");
    const drawer = document.querySelector(".bankfleet-filter-drawer");
    const closeBtn = document.querySelector(".bankfleet-filter-drawer__close");
    console.log({filterBtn,overlay,drawer,closeBtn});
    if(!filterBtn ||!overlay ||!drawer ||!closeBtn){console.warn("Faltan elementos del filtro");return;}
    filterBtn.addEventListener("click",() => {console.log("CLICK FILTRAR");drawer.classList.add("bankfleet-filter-drawer--active");overlay.classList.add("bankfleet-filter-overlay--active");});
    closeBtn.addEventListener("click",() => {drawer.classList.remove("bankfleet-filter-drawer--active");overlay.classList.remove("bankfleet-filter-overlay--active");});
    overlay.addEventListener("click",() => {drawer.classList.remove("bankfleet-filter-drawer--active");overlay.classList.remove("bankfleet-filter-overlay--active");});
}