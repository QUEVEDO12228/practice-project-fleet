document.addEventListener("DOMContentLoaded", function () {
    const ForgotContainer = document.querySelector(".forgot-password-container");
    if (!ForgotContainer) {console.warn("No se encontró '.forgot-password-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/forgot_password.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar forgot_password.html");}return response.text();})
        .then(data => {ForgotContainer.innerHTML = data;
            initForgot();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initForgot() {
    const RecibirCode = document.querySelector(".bankfleet-btn--primary");
    if (!RecibirCode) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RecibirCode.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_code_verify.html";});
}