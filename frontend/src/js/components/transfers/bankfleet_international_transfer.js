document.addEventListener("DOMContentLoaded", function () {
    const TableTransferConfirmationContainer = document.querySelector(".bankfleet-international-transfer-container");
    if (!TableTransferConfirmationContainer) {console.warn("No se encontró '.bankfleet-international-transfer-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/transfers/bankfleet_international_transfer.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_international_transfer.html");}return response.text();})
        .then(data => {TableTransferConfirmationContainer.innerHTML = data;
            initTransferInternationalEvents();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});
function initTransferInternationalEvents() {
    const continueButton = document.querySelector(".bankfleet-transfer-international__btn-primary");
    if (!continueButton) {console.error("No se encontró el botón Continuar");return;}
    continueButton.addEventListener("click", function () {
        const existingModal = document.querySelector(".bankfleet-transfer-confirmation");
        if (existingModal) {existingModal.remove();}
        const modal = document.createElement("div");
        modal.className = "bankfleet-transfer-confirmation";
        modal.innerHTML = `
            <div class="bankfleet-transfer-confirmation__card">
                <h3 class="bankfleet-transfer-confirmation__title">Confirmar transferencia</h3>
                <p class="bankfleet-transfer-confirmation__description-strong">Esto enviará el dinero <strong>¿Estás seguro?</strong></p>
                <p class="bankfleet-transfer-confirmation__description"> Estás a punto de enviar dinero mediante una llave registrada. Verifica la información antes de continuar.</p>
                <div class="bankfleet-transfer-confirmation__actions">
                    <button type="button" class="bankfleet-btn-secondary bankfleet-transfer-confirmation__cancel">Cancelar
                        <img src="/frontend/public/assets/icons/icon_back.svg" alt="" class="bankfleet-btn-secondary__icon">
                    </button>
                    <button class="bankfleet-btn bankfleet-btn--primary bankfleet-btn--expand bankfleet-transfer-confirmation__confirm">
                        <span class="bankfleet-btn__text">Confirmar</span>
                        <img src="/frontend/public/assets/icons/icon_next-white.svg" alt="->" class="bankfleet-btn__icon bankfleet-transfer-key__btn-icon">
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        const cancelBtn = modal.querySelector(".bankfleet-transfer-confirmation__cancel");
        cancelBtn.addEventListener("click", () => {modal.remove();});
        const confirmBtn = modal.querySelector(".bankfleet-transfer-confirmation__confirm");
        confirmBtn.addEventListener("click", () => {console.log("Transferencia confirmada");modal.remove();
        });
    });
}