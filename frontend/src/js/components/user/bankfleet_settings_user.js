document.addEventListener('DOMContentLoaded', function () {
  const BankfleetSettingsUserContainer = document.querySelector('.bankfleet-settings-user-container');
  if (BankfleetSettingsUserContainer) {fetch("/frontend/src/html/components/user/bankfleet_settings_user.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_settings_user.html");
        return response.text();})
      .then(data => {BankfleetSettingsUserContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-settings-user-container' en el HTML.");}
});
