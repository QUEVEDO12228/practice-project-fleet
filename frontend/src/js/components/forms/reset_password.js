document.addEventListener("DOMContentLoaded", function () {
    const ResetPassWordContainer = document.querySelector(".reset-password-container");
    if (!ResetPassWordContainer) {console.warn("No se encontró '.reset-password-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/reset_password.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar reset_password.html");}return response.text();})
        .then(data => {ResetPassWordContainer.innerHTML = data;
            initResetPassword();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initResetPassword() {
    const ResetPassWordForm = document.querySelector(".bankfleet-btn--primary");
    if (!ResetPassWordForm) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    ResetPassWordForm.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_login.html";});
}