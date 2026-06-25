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

    // BOTÓN VOLVER
    const backBtn = document.querySelector(".bankfleet-btn-secondary");

    if (backBtn) {
        backBtn.addEventListener("click", e => {
            e.preventDefault();

            window.location.href =
                "/frontend/src/html/pages/auth/home_bankfleet.html";
        });
    }

    // PASSWORD
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
        });
    }

    // LOGIN
    const loginBtn = document.querySelector(
        ".bankfleet-btn--primary"
    );

    if (loginBtn) {

        loginBtn.addEventListener("click", e => {

            e.preventDefault();

            const remember = document.querySelector(
                ".bankfleet-login__checkbox input"
            ).checked;

            console.log("Mantener sesión:", remember);

            showCustomAlert(
                "Inicio de sesión correcto",
                "success"
            );

            setTimeout(() => {

                window.location.href =
                    "/frontend/src/html/pages/home/vista_home_client.html";

            }, 1000);
        });
    }
}

function showCustomAlert(message, type = "success") {

    const alert = document.createElement("div");

    alert.className = `alert alert--${type}`;

    alert.innerHTML = `
        <div class="alert__content">
            <p class="alert__message">${message}</p>
        </div>
    `;

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.classList.add("show");
    }, 50);

    setTimeout(() => {

        alert.classList.remove("show");

        setTimeout(() => {
            alert.remove();
        }, 300);

    }, 2000);
}