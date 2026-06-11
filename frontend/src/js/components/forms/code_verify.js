document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".code-verify-container");

  if (!container) return;

  fetch("/frontend/src/html/components/forms/code_verify.html")
    .then(res => res.text())
    .then(html => {

      container.innerHTML = html;

      // 🔥 IMPORTANTE: esperar DOM listo dentro del HTML insertado
      setTimeout(() => {
        initVerify();
      }, 0);

    })
    .catch(err => console.error(err));
});


// =========================
// INIT CODE VERIFY
// =========================
function initVerify() {

  const nextBtn = document.querySelector(".bankfleet-btn--primary");

  if (!nextBtn) {
    console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");
    return;
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href =
      "/frontend/src/html/pages/auth/vista_reset_password.html";
  });
}