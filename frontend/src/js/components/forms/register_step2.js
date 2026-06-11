document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".form-container-step2");

  if (!container) return;

  fetch("/frontend/src/html/components/forms/register_step2.html")
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