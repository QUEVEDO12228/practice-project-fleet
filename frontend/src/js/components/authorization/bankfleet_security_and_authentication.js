document.addEventListener('DOMContentLoaded', function () {
  const BankfleetSecurityAndAuthenticationContainer = document.querySelector('.bankfleet-security-and-authentication-container');
  if (BankfleetSecurityAndAuthenticationContainer) {fetch("/frontend/src/html/components/authorization/bankfleet_security_and_authentication.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_security_and_authentication.html");
        return response.text();})
      .then(data => {BankfleetSecurityAndAuthenticationContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-security-and-authentication-container' en el HTML.");}
});
