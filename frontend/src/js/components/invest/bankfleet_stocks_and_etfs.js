document.addEventListener('DOMContentLoaded', function () {
  const BankfleetStocksAndEtfsContainer = document.querySelector('.bankfleet-stocks-and-etfs-container');
  if (BankfleetStocksAndEtfsContainer) {fetch("/frontend/src/html/components/invest/bankfleet_stocks_and_etfs.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_stocks_and_etfs.html");
        return response.text();})
      .then(data => {BankfleetStocksAndEtfsContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-stocks-and-etfs-container' en el HTML.");}
});
