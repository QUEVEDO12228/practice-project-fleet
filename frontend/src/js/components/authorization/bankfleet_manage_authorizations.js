document.addEventListener('DOMContentLoaded', function () {
  const BankfleetManageAuthorizationsContainer = document.querySelector('.bankfleet-manage-authorizations-container');
  if (BankfleetManageAuthorizationsContainer) {fetch("/frontend/src/html/components/authorization/bankfleet_manage_authorizations.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_manage_authorizations.html");
        return response.text();})
      .then(data => {BankfleetManageAuthorizationsContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-manage-authorizations-container' en el HTML.");}
});
