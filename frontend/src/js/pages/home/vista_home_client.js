document.addEventListener("DOMContentLoaded", function () {
    const CardsAccountsCreditsInvestmentsContainer = document.querySelector(".home-products-container");
    if (!CardsAccountsCreditsInvestmentsContainer) {console.warn("No se encontró '.home-products-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/cards/bankfleet_card_home.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_card_home.html");}return response.text();})
        .then(data => {CardsAccountsCreditsInvestmentsContainer.innerHTML = data;
            initBankfleetCards();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});