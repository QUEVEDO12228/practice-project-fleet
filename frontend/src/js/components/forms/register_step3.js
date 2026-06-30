document.addEventListener("DOMContentLoaded", function () {
    const RegisterStep3Container = document.querySelector(".form-container-step3");
    if (!RegisterStep3Container) {console.warn("No se encontró '.form-container-step3' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/register_step3.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step3.html");}return response.text();})
        .then(data => {RegisterStep3Container.innerHTML = data;
            initRegisterStep3();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initRegisterStep3() {
    const RegisterStep3Form = document.querySelector(".bankfleet-btn--primary");
    if (!RegisterStep3Form) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RegisterStep3Form.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_register_step4.html";});
}