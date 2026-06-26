document.addEventListener("DOMContentLoaded", function () {
    const TableManageGroupContainer = document.querySelector(".bankfleet-manage-groups-component-container");
    if (!TableManageGroupContainer) {console.warn("No se encontró '.bankfleet-manage-groups-component-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/tables/bankfleet_manage_groups.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_manage_groups.html");}return response.text();})
        .then(data => {TableManageGroupContainer.innerHTML = data;
            initForgot();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});