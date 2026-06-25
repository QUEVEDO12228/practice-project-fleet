document.addEventListener("DOMContentLoaded", () => {

    const sidebarContainer =
        document.querySelector(".navbar-index-content");

    if (!sidebarContainer) return;

    fetch("/frontend/src/html/components/navbar/navbar_index.html")
        .then(res => res.text())
        .then(html => {

            sidebarContainer.innerHTML = html;

            initSidebarPrincipal();

        })
        .catch(err => console.error(err));

});

function initDropdownMenu() {

    const menuButton =
        document.querySelector(".bankfleet-navbar__action-button");

    const drawer =
        document.querySelector(".bankfleet-menu-drawer");

    const overlay =
        document.querySelector(".bankfleet-menu-overlay");

    const closeButton =
        document.querySelector(".bankfleet-menu-drawer__close");

    if (!menuButton || !drawer || !overlay) return;

    menuButton.addEventListener("click", () => {

        drawer.classList.add(
            "bankfleet-menu-drawer--active"
        );

        overlay.classList.add(
            "bankfleet-menu-overlay--active"
        );

    });

    closeButton?.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

    function closeMenu() {

        drawer.classList.remove(
            "bankfleet-menu-drawer--active"
        );

        overlay.classList.remove(
            "bankfleet-menu-overlay--active"
        );

    }

}