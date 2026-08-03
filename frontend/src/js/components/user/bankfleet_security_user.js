document.addEventListener('DOMContentLoaded', function () {
  const BankfleetSecurityUserContainer = document.querySelector('.bankfleet-security-user.-container');
  if (BankfleetSecurityUserContainer) {fetch("/frontend/src/html/components/user/bankfleet_security_user.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_security_user.html");
        return response.text();})
      .then(data => {BankfleetSecurityUserContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-security-user.-container' en el HTML.");}
});
