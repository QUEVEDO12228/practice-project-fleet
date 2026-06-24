document.addEventListener("DOMContentLoaded", () => {

    const container =
    document.querySelector(".bankfleet-transfer-by-qr-container");

    if(!container) return;

    fetch(
    "/frontend/src/html/components/transfers/bankfleet_transfer_by_qr.html"
    )
    .then(res => res.text())
    .then(html => {

        container.innerHTML = html;

        initTransferMethod();

    })
    .catch(err => console.error(err));

});