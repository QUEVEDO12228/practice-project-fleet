document.addEventListener('DOMContentLoaded', function () {
  const BankfleetAuthorizationHistoryContainer = document.querySelector('.bankfleet-authorization-history-container');
  if (BankfleetAuthorizationHistoryContainer) {fetch("/frontend/src/html/components/authorization/bankfleet_authorization_history.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_authorization_history.html");
        return response.text();})
      .then(data => {BankfleetAuthorizationHistoryContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-authorization-history-container' en el HTML.");}
});
