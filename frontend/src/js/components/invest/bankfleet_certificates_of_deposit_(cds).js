document.addEventListener('DOMContentLoaded', function () {
  const BankfleetCertificatesOfDepositCdsContainer = document.querySelector('.bankfleet-certificates-of-deposit-(cds)-container');
  if (BankfleetCertificatesOfDepositCdsContainer) {fetch("/frontend/src/html/components/invest/bankfleet_certificates_of_deposit_(cds).html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_certificates_of_deposit_(cds).html");
        return response.text();})
      .then(data => {BankfleetCertificatesOfDepositCdsContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-certificates-of-deposit-(cds)-container' en el HTML.");}
});
