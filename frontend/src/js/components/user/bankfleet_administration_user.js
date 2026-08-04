document.addEventListener('DOMContentLoaded', function () {
  const BankfleetAdministrationUserContainer = document.querySelector('.bankfleet-administration-user-container');
  if (BankfleetAdministrationUserContainer) {fetch("/frontend/src/html/components/user/bankfleet_administration_user.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_administration_user.html");
        return response.text();})
      .then(data => {BankfleetAdministrationUserContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-administration-user-container' en el HTML.");}
});
