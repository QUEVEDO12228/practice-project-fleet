document.addEventListener('DOMContentLoaded', function () {
  const BankfleetSustainableInvestmentsEsgContainer = document.querySelector('.bankfleet-sustainable-investments-(esg)-container');
  if (BankfleetSustainableInvestmentsEsgContainer) {fetch("/frontend/src/html/components/invest/bankfleet_sustainable_investments(esg).html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_sustainable_investments(esg).html");
        return response.text();})
      .then(data => {BankfleetSustainableInvestmentsEsgContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-sustainable-investments-(esg)-container' en el HTML.");}
});
