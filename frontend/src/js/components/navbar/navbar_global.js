document.addEventListener("DOMContentLoaded", function () {
    const navbarElement = document.querySelector(".navbar-product-category-container");

    if (navbarElement) {
        fetch("/frontend/src/html/components/navbar/navbar_global.html")
            .then(response => response.text())
            .then(data => {
                navbarElement.innerHTML = data;

                // ===============================
                // LÓGICA PARA RESALTAR LINK ACTIVO
                // ===============================

                // Obtener archivo actual (página actual)
                const currentPage = window.location.pathname.split("/").pop() || "index.html";

                // Seleccionar todos los links dentro del navbar
                const navLinks = navbarElement.querySelectorAll(".navbar_global__link");

                // Recorrer y marcar activo
                navLinks.forEach(link => {

                    if (link.getAttribute("href").includes(currentPage)) {
                        link.classList.add("active");
                    }

                });

            })
            .catch(error => console.error("Error cargando el navbar de categorías", error));
    }
});