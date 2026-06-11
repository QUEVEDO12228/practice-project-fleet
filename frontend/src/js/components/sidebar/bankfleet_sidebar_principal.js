document.addEventListener("DOMContentLoaded", () => {

    const sidebarContainer =
        document.querySelector(".sidebar-container");

    if (!sidebarContainer) return;

    fetch("/frontend/src/html/components/siderbars/bankfleet_sidebar_principal.html")
        .then(res => res.text())
        .then(html => {

            sidebarContainer.innerHTML = html;

            initSidebarPrincipal();

        })
        .catch(err => console.error(err));

});


function initSidebarPrincipal() {

    const menuButtons =
        document.querySelectorAll(
            ".bankfleet-sidebar-principal__menu-button"
        );

    menuButtons.forEach(button => {

        button.addEventListener("click", () => {

            const submenu =
                button.nextElementSibling;

            const isOpen =
                submenu.classList.contains("active");

            document
                .querySelectorAll(
                    ".bankfleet-sidebar-principal__submenu"
                )
                .forEach(menu => {

                    menu.classList.remove("active");

                });

            document
                .querySelectorAll(
                    ".bankfleet-sidebar-principal__menu-button"
                )
                .forEach(btn => {

                    btn.classList.remove("active");

                });

            if (!isOpen) {

                submenu.classList.add("active");

                button.classList.add("active");

            }

        });

    });


    const submenuItems =
        document.querySelectorAll(
            ".bankfleet-sidebar-principal__submenu li"
        );

    submenuItems.forEach(item => {

        item.addEventListener("click", () => {

            document
                .querySelectorAll(
                    ".bankfleet-sidebar-principal__submenu li"
                )
                .forEach(li => {

                    li.classList.remove("active");

                });

            item.classList.add("active");

            console.log(
                "Opción seleccionada:",
                item.textContent.trim()
            );

            /*
            Aquí puedes navegar:

            window.location.href = "...";

            o cargar vistas:

            loadView("transferencias");

            */

        });

    });

}   