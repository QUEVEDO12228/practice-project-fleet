document.addEventListener("DOMContentLoaded", function () {
    const componentContainer = document.querySelector(
        ".bankfleet-transfer-by-qr-container"
    );
    if (!componentContainer) {
        console.error(
            "No existe .bankfleet-transfer-by-qr-container en el DOM"
        );
        return;
    }
    const componentPath =
        "/frontend/src/html/components/transfers/bankfleet_transfer_by_qr.html";
    fetch(componentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(
                    `Error cargando componente: ${response.status}`
                );
            }
            return response.text();
        })
        .then(html => {
            componentContainer.innerHTML = html;
            initTransferKeyEvents();
        })
        .catch(error => {
            console.error(
                "❌ Error cargando bankfleet_transfer_by_qr.html:",
                error
            );
        });
});
function initTransferKeyEvents() {
    const continueButton = document.querySelector(
        ".bankfleet-transfer-qr__btn-primary"
    );

    if (!continueButton) {
        console.error("No se encontró el botón Continuar");
        return;
    }

    continueButton.addEventListener("click", function () {

        const existingModal = document.querySelector(
            ".bankfleet-transfer-confirmation"
        );

        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement("div");

        modal.className = "bankfleet-transfer-confirmation";

        modal.innerHTML = `
            <div class="bankfleet-transfer-confirmation__card">

                <h3 class="bankfleet-transfer-confirmation__title">
                    Confirmar transferencia
                </h3>

                <p class="bankfleet-transfer-confirmation__description-strong">
                    Esto enviará el dinero <strong>¿Estás seguro?</strong>
                </p>

                <p class="bankfleet-transfer-confirmation__description">
                    Estás a punto de enviar dinero mediante una llave registrada.
                    Verifica la información antes de continuar.
                </p>

                <div class="bankfleet-transfer-confirmation__actions">

                    <button
                        type="button"
                        class="bankfleet-btn-secondary bankfleet-transfer-confirmation__cancel"
                    >
                        Cancelar
                        <img
                            src="/frontend/public/assets/icons/icon_back.svg"
                            alt=""
                            class="bankfleet-btn-secondary__icon"
                        >
                    </button>

                    <button
                        type="button"
                        class="bankfleet-btn bankfleet-btn--primary bankfleet-transfer-confirmation__confirm"
                    >
                        Confirmar
                        <img
                            src="/frontend/public/assets/icons/icon_next-white.svg"
                            alt=""
                            class="bankfleet-btn__icon"
                        >
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(modal);

        const cancelBtn = modal.querySelector(
            ".bankfleet-transfer-confirmation__cancel"
        );

        cancelBtn.addEventListener("click", () => {
            modal.remove();
        });

        const confirmBtn = modal.querySelector(
            ".bankfleet-transfer-confirmation__confirm"
        );

        confirmBtn.addEventListener("click", () => {

            console.log("Transferencia confirmada");

            modal.remove();

            // Aquí colocas la lógica real de la transferencia
            // enviarTransferencia();

        });

    });
}