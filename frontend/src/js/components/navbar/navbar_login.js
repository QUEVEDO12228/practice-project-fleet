document.addEventListener("DOMContentLoaded", function () {
    const NavbarLogin = document.querySelector(".navbar-login-content");
    if (!NavbarLogin) {console.warn("No se encontró '.navbar-login-content' en el HTML.");return;}
    fetch("/frontend/src/html/components/navbar/navbar_login.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar navbar_login.html");}return response.text();})
        .then(data => {NavbarLogin.innerHTML = data;
        }).catch(error => {console.error("Error cargando el componente:", error);});
});