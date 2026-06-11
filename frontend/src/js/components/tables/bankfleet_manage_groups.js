document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-manage-groups-component-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/tables/bankfleet_manage_groups.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet_manage_groups.html:", error));
  }
});