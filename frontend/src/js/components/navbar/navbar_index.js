document.addEventListener("DOMContentLoaded", function () {
    const NavbarIndexLanding = document.querySelector(".navbar-index-content");
    if (!NavbarIndexLanding) {console.warn("No se encontró '.navbar-index-content' en el HTML.");return;}
    fetch("/frontend/src/html/components/navbar/navbar_index.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar navbar_index.html");}return response.text();})
        .then(data => {NavbarIndexLanding.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});
function initDropdownMenu() {
    const menuButton = document.querySelector(".bankfleet-navbar__action-button");
    const drawer = document.querySelector(".bankfleet-menu-drawer");
    const overlay = document.querySelector(".bankfleet-menu-overlay");
    const closeButton = document.querySelector(".bankfleet-menu-drawer__close");
    if (!menuButton || !drawer || !overlay) return;
    menuButton.addEventListener("click", () => {
        drawer.classList.add("bankfleet-menu-drawer--active");
        overlay.classList.add("bankfleet-menu-overlay--active");
    });
    closeButton?.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    function closeMenu() {drawer.classList.remove("bankfleet-menu-drawer--active"); overlay.classList.remove("bankfleet-menu-overlay--active");}
}