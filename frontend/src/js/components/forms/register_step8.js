document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep8Container = document.querySelector(".form-container-step8");
    if (!RegisterStep8Container) {console.warn("No se encontró '.form-container-step8' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step8.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step8.html");}return response.text();})
        .then(data => {RegisterStep8Container.innerHTML = data;
            initRegisterStep8();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initRegisterStep8() {
    const RegisterStep8Form = document.querySelector(".bankfleet-btn--primary");
    if (!RegisterStep8Form) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RegisterStep8Form.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_login.html";});
}