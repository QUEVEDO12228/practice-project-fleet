document.addEventListener('DOMContentLoaded', function () {
  const BankfleetAuthorizationSchemesContainer = document.querySelector('.bankfleet-authorization-schemes-container');
  if (BankfleetAuthorizationSchemesContainer) {fetch("/frontend/src/html/components/authorization/bankfleet_authorization_schemes.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_authorization_schemes.html");
        return response.text();})
      .then(data => {BankfleetAuthorizationSchemesContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-authorization-schemes-container' en el HTML.");}
});
