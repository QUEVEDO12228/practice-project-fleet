document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-table-transfer-history-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/tables/bankfleet_table_transfer_history.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet_table_transfer_history.html", error));
  }
});