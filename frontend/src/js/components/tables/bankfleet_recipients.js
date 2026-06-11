document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-recipients-component-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/tables/bankfleet_recipients.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet-recipients.html:", error));
  }
});