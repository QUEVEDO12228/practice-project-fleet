document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-employee-management-table-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/tables/bankfleet_employee_management_table.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet_employee_management_table.html:", error));
  }
});