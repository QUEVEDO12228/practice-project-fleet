document.addEventListener('DOMContentLoaded', function () {
  const BankfleetProfileUserContainer = document.querySelector('.bankfleet-profile-user-container');
  if (BankfleetProfileUserContainer) {fetch("/frontend/src/html/components/user/bankfleet_profile_user.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_profile_user.html");
        return response.text();})
      .then(data => {BankfleetProfileUserContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-profile-user-container' en el HTML.");}
});