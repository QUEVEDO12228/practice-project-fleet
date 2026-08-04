document.addEventListener('DOMContentLoaded', function () {
  const BankfleetRoboAdvisorsContainer = document.querySelector('.bankfleet-robo-advisors-container');
  if (BankfleetRoboAdvisorsContainer) {fetch("/frontend/src/html/components/invest/bankfleet_robo_advisors.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_robo_advisors.html");
        return response.text();})
      .then(data => {BankfleetRoboAdvisorsContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-robo-advisors-container' en el HTML.");}
});
