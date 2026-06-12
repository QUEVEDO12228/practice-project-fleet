/* =========================================================
   1. CARGA DEL COMPONENTE (FETCH)
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const formContainer =
    document.querySelector(".bankfleet-key-transfer-component-container");

  if (formContainer) {

    fetch("/frontend/src/html/components/transfers/bankfleet_key_transfer.html")
      .then(response => response.text())
      .then(data => {

        formContainer.innerHTML = data;

        // Inicializar lógica DESPUÉS del render
        initBankfleetTransferKey();

      })
      .catch(error =>
        console.error("Error al cargar bankfleet_key_transfer.html:", error)
      );
  }
});
function initBankfleetTransferKey() {

  const options = document.querySelectorAll(".bankfleet-transfer-key__option");
  const destinationInput = document.getElementById("destinationInput");

  if (!destinationInput) return;

  const config = {
    phone: {
      placeholder: "+57 3001234567",
      type: "tel"
    },
    document: {
      placeholder: "1020304050",
      type: "text"
    },
    email: {
      placeholder: "usuario@email.com",
      type: "email"
    }
  };

  function updateField(type) {
    const data = config[type];

    destinationInput.placeholder = data.placeholder;
    destinationInput.type = data.type;
  }

  options.forEach(option => {
    option.addEventListener("click", () => {

      options.forEach(btn =>
        btn.classList.remove("bankfleet-transfer-key__option--active")
      );

      option.classList.add("bankfleet-transfer-key__option--active");

      const type = option.dataset.type;

      updateField(type);
    });
  });

  // default
  updateField("phone");
}