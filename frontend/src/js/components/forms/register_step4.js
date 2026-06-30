document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep4Container = document.querySelector(".form-container-step4");
    if (!RegisterStep4Container) {console.warn("No se encontró '.form-container-step4' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step4.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step4.html");}return response.text();})
        .then(data => {RegisterStep4Container.innerHTML = data;
            initRegisterStep4();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initRegisterStep4() {
    const RegisterStep4Form = document.querySelector(".bankfleet-btn--primary");
    if (!RegisterStep4Form) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RegisterStep4Form.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_register_step5.html";});
}