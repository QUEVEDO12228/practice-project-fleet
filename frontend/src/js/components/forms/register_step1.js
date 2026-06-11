document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".form-container-step1");

  if (!container) return;

  fetch("/frontend/src/html/components/forms/register_step1.html")
    .then(res => res.text())
    .then(html => {

      container.innerHTML = html;

      // 🔥 IMPORTANTE: esperar DOM listo dentro del HTML insertado
      setTimeout(() => {
        initStep1();
      }, 0);

    })
    .catch(err => console.error(err));
});

function initStep1() {

  // =========================
  // BOTÓN SIGUIENTE
  // =========================
  const nextBtn = document.querySelector(".bankfleet-btn--primary");

  if (!nextBtn) {
    console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");
    return;
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href =
      "/frontend/src/html/pages/auth/vista_register_step2.html";
  });


  // =========================
  // BOTÓN VOLVER
  // =========================
  const backBtn = document.querySelector(".bankfleet-btn-secondary");

  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();

      window.location.href =
        "http://127.0.0.1:5500/frontend/src/html/pages/auth/vista_login.html";
    });
  }
}