document.addEventListener("DOMContentLoaded", function () {
    const EmployeeCreateContainer = document.querySelector(".form-container-step7");
    if (!EmployeeCreateContainer) {console.warn("No se encontró '.form-container-step7' en el HTML.");return;}
    fetch("/frontend/src/html/components/electronic payroll/bankfleet_employee_create.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar register_step7.html");}return response.text();})
        .then(data => {EmployeeCreateContainer.innerHTML = data;
            initEmployeeCreateContainer();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initEmployeeCreateContainer() {
    const EmployeeCreateContainerForm = document.querySelector(".bankfleet-btn--primary");
    if (!EmployeeCreateContainerForm) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    EmployeeCreateContainerForm.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_register_step1.html";});
}