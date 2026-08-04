document.addEventListener('DOMContentLoaded', function () {
  const BankfleetNotificationUserContainer = document.querySelector('.bankfleet-notification-user-container');
  if (BankfleetNotificationUserContainer) {fetch("/frontend/src/html/components/user/bankfleet_notification_user.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_notification_user.html");
        return response.text();})
      .then(data => {BankfleetNotificationUserContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-notification-user-container' en el HTML.");}
});
