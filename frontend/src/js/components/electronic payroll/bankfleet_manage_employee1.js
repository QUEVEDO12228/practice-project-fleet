document.addEventListener("DOMContentLoaded", function () {
    const ManageEmployee1Container = document.querySelector(".bankfleet-manage-employee1-container");
    if (!ManageEmployee1Container) {console.warn("No se encontró '.bankfleet-manage-employee1-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/electronic payroll/bankfleet_manage_employee1.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_manage_employee1.html");}return response.text();})
        .then(data => {ManageEmployee1Container.innerHTML = data;
            initManageEmployee1();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initManageEmployee1() {
    const ManageEmployee1 = document.querySelector(".bankfleet-btn--primary");
    if (!ManageEmployee1) {console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");return;}
    ManageEmployee1.addEventListener("click", function (e) {e.preventDefault();window.location.href = "/frontend/src/html/pages/dashboard/banking/payrollpayment/tables/view_bankfleet_employee_management_table.html";});
}