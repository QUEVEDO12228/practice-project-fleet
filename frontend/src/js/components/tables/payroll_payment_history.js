
document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-payroll-payment-history-component-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/tables/payroll_payment_history.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet_manage_groups.html:", error));
  }
});