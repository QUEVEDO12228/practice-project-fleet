document.addEventListener("DOMContentLoaded", () => {

    const menuContainer =
        document.querySelector(".bankfleet-drop-down-menu-container");

    if (!menuContainer) return;

    fetch("/frontend/src/html/components/siderbars/bankfleet_drop-down_menu.html")
        .then(res => res.text())
        .then(html => {

            menuContainer.innerHTML = html;

            initBankfleetMenuDrawer();

        })
        .catch(err => console.error(err));

});

function initBankfleetMenuDrawer() {

    const menuButton =
        document.querySelector(".bankfleet-navbar__menu-trigger");

    const drawer =
        document.querySelector(".bankfleet-menu-drawer");

    const overlay =
        document.querySelector(".bankfleet-menu-overlay");

    const closeButton =
        document.querySelector(".bankfleet-menu-drawer__close");

    if (!menuButton || !drawer || !overlay) {
        return;
    }

    menuButton.addEventListener("click", () => {

        drawer.classList.add(
            "bankfleet-menu-drawer--active"
        );

        overlay.classList.add(
            "bankfleet-menu-overlay--active"
        );

        document.body.style.overflow = "hidden";

    });

    closeButton?.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    function closeMenu() {

        drawer.classList.remove(
            "bankfleet-menu-drawer--active"
        );

        overlay.classList.remove(
            "bankfleet-menu-overlay--active"
        );

        document.body.style.overflow = "";

    }

}