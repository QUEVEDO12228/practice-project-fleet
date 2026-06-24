document.addEventListener("DOMContentLoaded", () => {

    const container =
    document.querySelector(".bankfleet-transfer-other-accounts-container");

    if(!container) return;

    fetch(
    "/frontend/src/html/components/transfers/bankfleet_transfer_other_accounts.html"
    )
    .then(res => res.text())
    .then(html => {

        container.innerHTML = html;

        initTransferMethod();

    })
    .catch(err => console.error(err));

});