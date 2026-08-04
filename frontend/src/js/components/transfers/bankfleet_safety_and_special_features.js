document.addEventListener("DOMContentLoaded", function () {
    const BankfleetSafetyAndSpecialFeaturesContainer = document.querySelector(".bankfleet-safety-and-special-features-container");
    if (!BankfleetSafetyAndSpecialFeaturesContainer) {console.warn("No se encontró '.bankfleet-safety-and-special-features-container' en el HTML.");return;}
    fetch("/frontend/src/html/components/transfers/bankfleet_safety_and_special_features.html")
        .then(response => {if (!response.ok) {throw new Error("Error al cargar bankfleet_safety_and_special_features.html");}return response.text();})
        .then(data => {BankfleetSafetyAndSpecialFeaturesContainer.innerHTML = data;
            initTransferMethod();})
        .catch(error => {console.error("Error cargando el componente:", error);});
});