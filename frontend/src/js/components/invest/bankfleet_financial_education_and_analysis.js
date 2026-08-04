document.addEventListener('DOMContentLoaded', function () {
  const BankfleetFinancialEducationAndAnalysisContainer = document.querySelector('.bankfleet-financial-education-and-analysis-container');
  if (BankfleetFinancialEducationAndAnalysisContainer) {fetch("/frontend/src/html/components/invest/bankfleet_financial_education_and_analysis.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_financial_education_and_analysis.html");
        return response.text();})
      .then(data => {BankfleetFinancialEducationAndAnalysisContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-financial-education-and-analysis-container' en el HTML.");}
});
