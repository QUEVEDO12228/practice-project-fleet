document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.querySelector(".login-container");

    if (!formContainer) return;

    fetch("/frontend/src/html/components/forms/Login.html")
        .then(res => res.text())
        .then(html => {
            formContainer.innerHTML = html;
            initLogin();
        })
        .catch(err => console.error(err));
});

function initLogin() {

    // ==========================
    // BOTÓN VOLVER
    // ==========================
    const backBtn = document.querySelector(".bankfleet-btn-secondary");

    if (backBtn) {
        backBtn.addEventListener("click", e => {
            e.preventDefault();

            window.location.href =
                "/frontend/src/html/pages/auth/home_bankfleet.html";
        });
    }

    // ==========================
    // MOSTRAR / OCULTAR PASSWORD
    // ==========================
    const passwordInput = document.querySelector(
        ".bankfleet-login__input--password"
    );

    const toggleBtn = document.querySelector(
        ".bankfleet-login__toggle-password"
    );

    const eyeImg = toggleBtn?.querySelector("img");

    if (toggleBtn && passwordInput && eyeImg) {

        toggleBtn.addEventListener("click", () => {

            const hidden = passwordInput.type === "password";

            passwordInput.type = hidden ? "text" : "password";

            eyeImg.src = hidden
                ? "/frontend/public/assets/icons/icon_closed-eye.svg"
                : "/frontend/public/assets/icons/icon_open-eye.svg";

            eyeImg.alt = hidden
                ? "Ocultar contraseña"
                : "Mostrar contraseña";
        });
    }

    // ==========================
    // LOGIN
    // ==========================
    const loginBtn = document.querySelector(
        ".bankfleet-login__bankfleet-btn--primary"
    );

    if (loginBtn) {

        loginBtn.addEventListener("click", e => {

            e.preventDefault();

            const remember = document.querySelector(
                ".bankfleet-login__checkbox input"
            )?.checked;

            console.log("Mantener sesión:", remember);

            mostrarModalToken();
        });
    }
}

// =====================================
// MODAL TOKEN
// =====================================
function mostrarModalToken() {

    const existente = document.querySelector(
        ".bankfleet-transfer-confirmation-token"
    );

    if (existente) {
        existente.remove();
    }

    const modal = document.createElement("div");

    modal.className =
        "bankfleet-transfer-confirmation-token bankfleet-transfer-confirmation--visible";

    modal.innerHTML = `
        <div class="bankfleet-transfer-confirmation-token__card">

            <h3 class="bankfleet-transfer-confirmation-token__title">
                Enviamos un token a tu correo
            </h3>

            <p class="bankfleet-transfer-confirmation-token__description-strong">
                Tendrás 2 minutos para ingresarlo
                <strong>2:00</strong>
            </p>

            <p class="bankfleet-transfer-confirmation-token__description">
                Su propósito exclusivo es garantizar una comunicación segura entre su dispositivo y nuestra plataforma, protegiendo su identidad.
            </p>

            <div class="bankfleet-register-step1__field">

                <label class="bankfleet-transfer-confirmation-token__label">
                    Token
                </label>

                <div class="bankfleet-transfer-confirmation-token__bankfleet-code-box">

                    <input maxlength="1" type="text" class="bankfleet-transfer-confirmation-token__input">
                    <input maxlength="1" type="text" class="bankfleet-transfer-confirmation-token__input">
                    <input maxlength="1" type="text" class="bankfleet-transfer-confirmation-token__input">
                    <input maxlength="1" type="text" class="bankfleet-transfer-confirmation-token__input">
                    <input maxlength="1" type="text" class="bankfleet-transfer-confirmation-token__input">
                    <input maxlength="1" type="text" class="bankfleet-transfer-confirmation-token__input">

                </div>

            </div>

            <div class="bankfleet-transfer-confirmation-token__actions">

                <button
                    type="button"
                    class="bankfleet-btn-secondary bankfleet-transfer-confirmation-token__cancel">

                    <img
                        src="/frontend/public/assets/icons/icon_back.svg"
                        alt=""
                        class="bankfleet-btn-secondary__icon">

                </button>

                <button
                    type="button"
                    class="bankfleet-btn bankfleet-btn--primary bankfleet-btn--expand bankfleet-transfer-confirmation-token__confirm">

                    <span class="bankfleet-btn__text">
                        Confirmar
                    </span>

                    <img
                        src="/frontend/public/assets/icons/icon_next-white.svg"
                        alt=""
                        class="bankfleet-btn__icon">

                </button>

            </div>

        </div>
    `;

    document.body.appendChild(modal);

    // Cerrar modal
    modal
        .querySelector(".bankfleet-transfer-confirmation-token__cancel")
        .addEventListener("click", () => {
            modal.remove();
        });

    // Confirmar token
    modal
        .querySelector(".bankfleet-transfer-confirmation-token__confirm")
        .addEventListener("click", () => {

            window.location.href =
                "/frontend/src/html/pages/home/vista_home_client.html";

        });
}