document.addEventListener('DOMContentLoaded', function () {
  const BankfleetTransactionsAwaitingApprovalContainer = document.querySelector('.bankfleet-transactions-awaiting-approval-container');
  if (BankfleetTransactionsAwaitingApprovalContainer) {fetch("/frontend/src/html/components/authorization/bankfleet_transactions_awaiting_approval.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_transactions_awaiting_approval.html");
        return response.text();})
      .then(data => {BankfleetTransactionsAwaitingApprovalContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-transactions-awaiting-approval-container' en el HTML.");}
});
