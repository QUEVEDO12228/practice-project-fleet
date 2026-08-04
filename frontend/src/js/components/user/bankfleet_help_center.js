document.addEventListener('DOMContentLoaded', function () {
  const BankfleetHelpCenterContainer = document.querySelector('.bankfleet-help-center-container');
  if (BankfleetHelpCenterContainer) {fetch("/frontend/src/html/components/user/bankfleet_help_center.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_help_center.html");
        return response.text();})
      .then(data => {BankfleetHelpCenterContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-help-center-container' en el HTML.");}
});
