document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep5Container = document.querySelector(".form-container-step5");
    if (!RegisterStep5Container) {console.warn("No se encontró '.form-container-step5' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step5.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step5.html");}return response.text();})
        .then(data => {RegisterStep5Container.innerHTML = data;
            initRegisterStep5();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initRegisterStep5() {
    const RegisterStep5Form = document.querySelector(".bankfleet-btn--primary");
    if (!RegisterStep5Form) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RegisterStep5Form.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_register_step6.html";});
}