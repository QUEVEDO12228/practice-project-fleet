document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep1Container = document.querySelector(".form-container-step1");
    if (!RegisterStep1Container) {console.warn("No se encontró '.form-container-step1' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step1.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step1.html");}return response.text();})
        .then(data => {RegisterStep1Container.innerHTML = data;
            initRegisterStep1();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initRegisterStep1() {
    const RegisterStep1Form = document.querySelector(".bankfleet-btn--primary");
    if (!RegisterStep1Form) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RegisterStep1Form.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_register_step2.html";});
}