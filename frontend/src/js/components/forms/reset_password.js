document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".reset-password-container");

  if (!container) return;

  fetch("/frontend/src/html/components/forms/reset_password.html")
    .then(res => res.text())
    .then(html => {

      container.innerHTML = html;

      // 🔥 IMPORTANTE: esperar DOM listo dentro del HTML insertado
      setTimeout(() => {
        initReset();
      }, 0);

    })
    .catch(err => console.error(err));
});

function initReset() {

  const nextBtn = document.querySelector(".bankfleet-btn--primary");

  if (!nextBtn) {
    console.error("NO ENCONTRÉ BOTÓN SIGUIENTE");
    return;
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href =
      "/frontend/src/html/pages/auth/vista_login.html";
  });
}