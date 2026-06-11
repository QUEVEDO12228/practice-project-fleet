document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-scheduled-consultations-component-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/tables/bankfleet_scheduled_consultations_payroll.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet_scheduled_consultations_payroll.html:", error));
  }
});