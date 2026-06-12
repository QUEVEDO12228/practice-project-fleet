
document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.querySelector(".bankfleet-scheduled-consultations-transfers-component-container");

  if (formContainer) {
    fetch("/frontend/src/html/components/tables/bankfleet_scheduled_consultations_transfers.html")
      .then(response => response.text())
      .then(data => {
        formContainer.innerHTML = data;
        attachLoginEvents();
      })
      .catch(error => console.error("Error al cargar bankfleet_scheduled_consultations_transfers.html:", error));
  }
});
document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(
        ".transfer-view-container"
    );

    if(!container) return;

    fetch(
        "/frontend/src/html/components/transfers/TransferByKey.html"
    )
    .then(res => res.text())
    .then(html => {

        container.innerHTML = html;

        initTransferByKey();

    });

});