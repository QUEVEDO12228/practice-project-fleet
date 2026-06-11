document.addEventListener("DOMContentLoaded", function () {

  const formContainer = document.querySelector(".forgot-password-container");

  if (formContainer) {

    fetch("/frontend/src/html/components/forms/forgot_password.html")
      .then(response => response.text())
      .then(data => {

        formContainer.innerHTML = data;

        // ✅ IMPORTANTE: ejecutar después de insertar HTML
        initCode();

      })
      .catch(error => console.error(
        "Error al cargar forgot_password.html:",
        error
      ));
  }

});


// =========================
// INIT CODE VERIFY
// =========================
function initCode() {

  const nextBtn = document.querySelector(".bankfleet-btn--primary");

  if (!nextBtn) {
    console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");
    return;
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href =
      "/frontend/src/html/pages/auth/vista_code_verify.html";
  });
}