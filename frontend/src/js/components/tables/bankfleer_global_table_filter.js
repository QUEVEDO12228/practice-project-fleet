document.addEventListener("DOMContentLoaded", () => {
    const filterContainer =document.querySelector(".bankfleer-global-table-filter-container");
    if (!filterContainer) return;
    fetch("/frontend/src/html/components/tables/bankfleer_global_table_filter.html")
    .then(res => res.text()).then(html => {filterContainer.innerHTML = html;initBankfleetfilterDrawer();})
        .catch(err => console.error(err));
});
function initBankfleetfilterDrawer() {
    const filterButton = document.querySelector(".bankfleet-navbar__filter-trigger");
    const drawer = document.querySelector(".bankfleet-filter-drawer");
    const overlay = document.querySelector(".bankfleet-filter-overlay");
    const closeButton = document.querySelector(".bankfleet-filter-drawer__close");
    if (!filterButton || !drawer || !overlay) {return;}
    filterButton.addEventListener("click", () => {drawer.classList.add("bankfleet-transactions__btn-secondary");
    overlay.classList.add("bankfleet-filter-overlay--active");document.body.style.overflow = "hidden";});
    closeButton?.addEventListener("click", closefilter);
    overlay.addEventListener("click", closefilter);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {closefilter();}});
    function closefilter() {
        drawer.classList.remove("bankfleet-transactions__btn-secondary");
        overlay.classList.remove("bankfleet-filter-overlay--active");
        document.body.style.overflow = "";
    }
}   