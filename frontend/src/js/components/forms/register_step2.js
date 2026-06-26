document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep2Container = document.querySelector(".form-container-step2");
    if (!RegisterStep2Container) {console.warn("No se encontró '.form-container-step2' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step2.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step2.html");}return response.text();})
        .then(data => {RegisterStep2Container.innerHTML = data;
            initForgot();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});