document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep6Container = document.querySelector(".form-container-step6");
    if (!RegisterStep6Container) {console.warn("No se encontró '.form-container-step6' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step6.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step6.html");}return response.text();})
        .then(data => {RegisterStep6Container.innerHTML = data;
            initRegisterStep6();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initRegisterStep6() {
    const RegisterStep6Form = document.querySelector(".bankfleet-register-step4__button-class");
    if (!RegisterStep6Form) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RegisterStep6Form.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/view_register_step7.html";});
}