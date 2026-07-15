document.addEventListener("DOMContentLoaded", function () {
    const HeroIndexLanding = document.querySelector(".bankfleet-hero-index-content");
    if (!HeroIndexLanding) {console.warn("No se encontró '.bankfleet-hero-index-content' en el HTML.");return;}
    fetch("/frontend/src/html/components/heros/bankfleet_hero_index_landing.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_hero_index_landing.html");}return response.text();})
        .then(data => {HeroIndexLanding.innerHTML = data;
            initDropdownMenu();
        }).catch(error => {console.error("Error cargando el componente:", error);});
});