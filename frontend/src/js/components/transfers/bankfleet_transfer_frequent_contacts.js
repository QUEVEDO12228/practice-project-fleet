document.addEventListener("DOMContentLoaded", () => {

    const container =
    document.querySelector(".bankfleet-transfer-frequent-contacts-container");

    if(!container) return;

    fetch(
    "/frontend/src/html/components/transfers/bankfleet_transfer_frequent_contacts.html"
    )
    .then(res => res.text())
    .then(html => {

        container.innerHTML = html;

        initTransferMethod();

    })
    .catch(err => console.error(err));

});