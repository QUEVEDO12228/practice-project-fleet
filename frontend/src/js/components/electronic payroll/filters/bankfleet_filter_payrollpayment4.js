export async function loadFilterDrawer() {

    const filterContainer = document.querySelector(
        ".bankfleet-filter-payrollpayment4-container"
    );

    if (!filterContainer) {
        console.warn("No existe el contenedor del filtro.");
        return;
    }

    const response = await fetch(
        "/frontend/src/html/components/electronic payroll/filters/bankfleet_filter_payrollpayment4.html"
    );

    if (!response.ok) {
        throw new Error("No se pudo cargar el filtro.");
    }

    filterContainer.innerHTML = await response.text();

}

export function initFilterDrawer() {

    const filterBtn = document.querySelector(
        ".bankfleet-manage-groups__btn-filter"
    );

    const overlay = document.querySelector(".bankfleet-filter-overlay");

    const drawer = document.querySelector(".bankfleet-filter-drawer");

    const closeBtn = document.querySelector(".bankfleet-filter-drawer__close");

    if (!filterBtn || !overlay || !drawer || !closeBtn) {

        console.warn("Faltan elementos del filtro");

        console.log({
            filterBtn,
            overlay,
            drawer,
            closeBtn
        });

        return;

    }

    filterBtn.addEventListener("click", () => {

        drawer.classList.add("bankfleet-filter-drawer--active");
        overlay.classList.add("bankfleet-filter-overlay--active");

    });

    closeBtn.addEventListener("click", closeDrawer);

    overlay.addEventListener("click", closeDrawer);

    function closeDrawer() {

        drawer.classList.remove("bankfleet-filter-drawer--active");

        overlay.classList.remove("bankfleet-filter-overlay--active");

    }

}