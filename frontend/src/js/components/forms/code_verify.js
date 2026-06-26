document.addEventListener("DOMContentLoaded", function () {
    const ForgotContainer = document.querySelector(".code-verify-container");
    if (!ForgotContainer) {console.warn("No se encontró '.code-verify-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/forms/code_verify.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar code_verify.html");}return response.text();})
        .then(data => {ForgotContainer.innerHTML = data;
            initCodeVerify();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initCodeVerify() {
    const RecibirCode = document.querySelector(".bankfleet-btn--primary");
    if (!RecibirCode) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    RecibirCode.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_reset_password.html";});
}