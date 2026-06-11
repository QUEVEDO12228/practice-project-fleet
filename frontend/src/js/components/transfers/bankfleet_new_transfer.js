document.addEventListener("DOMContentLoaded", () => {

    const container =
    document.querySelector(".transfer-container");

    if(!container) return;

    fetch(
    "/frontend/src/html/components/transfers/bankfleet_new_transfer.html"
    )
    .then(res => res.text())
    .then(html => {

        container.innerHTML = html;

        initTransferMethod();

    })
    .catch(err => console.error(err));

});