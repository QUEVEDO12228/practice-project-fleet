document.addEventListener('DOMContentLoaded', function () {
  const BankfleetInvestmentFundsAndTrustsContainer = document.querySelector('.bankfleet-investment-funds-and-trusts-container');
  if (BankfleetInvestmentFundsAndTrustsContainer) {fetch("/frontend/src/html/components/invest/bankfleet_investment_funds_and_trusts.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_investment_funds_and_trusts.html");
        return response.text();})
      .then(data => {BankfleetInvestmentFundsAndTrustsContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-investment-funds-and-trusts-container' en el HTML.");}
});
