document.addEventListener('DOMContentLoaded', function () {
  const BankfleetNonMonetaryTransactionsContainer = document.querySelector('.bankfleet-non-monetary-transactions-container');
  if (BankfleetNonMonetaryTransactionsContainer) {fetch("/frontend/src/html/components/authorization/bankfleet_non_monetary_transactions.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_non_monetary_transactions.html");
        return response.text();})
      .then(data => {BankfleetNonMonetaryTransactionsContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-non-monetary-transactions-container' en el HTML.");}
});
