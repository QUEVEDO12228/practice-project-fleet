document.addEventListener("DOMContentLoaded", function () {
    const NavbarIndexLanding = document.querySelector(".navbar-index-content");
    if (!NavbarIndexLanding) {console.warn("No se encontró '.navbar-index-content' en el HTML.");return;}
    fetch("/frontend/src/html/components/navbar/navbar_index.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar navbar_index.html");}return response.text();})
        .then(data => {NavbarIndexLanding.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});