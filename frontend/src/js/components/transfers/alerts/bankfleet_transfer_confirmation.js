document.addEventListener("DOMContentLoaded", () => {

    const container =
    document.querySelector(".bankfleet-alert-transfer-confirmation-container");

    if(!container) return;

    fetch(
    "/frontend/src/html/components/transfers/alerts/bankfleet_transfers_confirmation.html"
    )
    .then(res => res.text())
    .then(html => {

        container.innerHTML = html;

        initTransferMethod();

    })
    .catch(err => console.error(err));

});