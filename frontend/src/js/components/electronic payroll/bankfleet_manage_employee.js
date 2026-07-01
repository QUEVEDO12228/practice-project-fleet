document.addEventListener("DOMContentLoaded", function () {
    const ManageEmployeeContainer = document.querySelector(".bankfleet-manage-employee-container");
    if (!ManageEmployeeContainer) {console.warn("No se encontró '.bankfleet-manage-employee-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/electronic payroll/bankfleet_manage_employee.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_manage_employee.html");}return response.text();})
        .then(data => {ManageEmployeeContainer.innerHTML = data;
            initManageEmployee();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initManageEmployee() {
    const ManageEmployee = document.querySelector(".bankfleet-btn--primary");
    if (!ManageEmployee) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    ManageEmployee.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/auth/vista_register_step1.html";});
}