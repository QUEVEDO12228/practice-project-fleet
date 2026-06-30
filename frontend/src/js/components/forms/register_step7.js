document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep7Container = document.querySelector(".form-container-step7");
    if (!RegisterStep7Container) {console.warn("No se encontró '.form-container-step7' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step7.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step7.html");}return response.text();})
        .then(data => {RegisterStep7Container.innerHTML = data;
            initRegisterStep7();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initRegisterStep7() {
    const RegisterStep7Form = document.querySelector(".bankfleet-btn--primary");
    if (!RegisterStep7Form) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RegisterStep7Form.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_register_step1.html";});
}