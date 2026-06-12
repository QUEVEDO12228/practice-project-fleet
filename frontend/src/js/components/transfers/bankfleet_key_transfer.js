
document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-key-transfer-component-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/transfers/bankfleet_key_transfer.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet_key_transfer.html:", error));
  }
});