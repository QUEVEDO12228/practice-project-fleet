document.addEventListener(
    "DOMContentLoaded",
    () => {

        const container =
            document.querySelector(
                ".home-products-container"
            );

        fetch(
            "/frontend/src/html/components/cards/bankfleet_card_home.html"
        )
        .then(res => res.text())
        .then(html => {

            container.innerHTML =
                html;

            initBankfleetCards();

        });

    }
);