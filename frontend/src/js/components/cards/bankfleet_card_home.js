async function initBankfleetCards() {

    const container =
        document.querySelector(
            ".bankfleet-products__grid"
        );

    if (!container) return;

    try {

        const response = await fetch(
            "/frontend/src/data/bankfleet_cards_home.json"
        );

        const products =
            await response.json();

        renderProducts(
            products,
            container
        );

    }
    catch(error) {

        console.error(error);

    }

}

function renderProducts(
    products,
    container
) {

    container.innerHTML =
        products.map(product => `

        <article
            class="
                bankfleet-card-home
                bankfleet-card-home--${product.gradient}
            ">

            <div
                class="bankfleet-card-home__top">

                <span
                    class="
                        bankfleet-card-home__status
                        bankfleet-card-home__status--${product.status}
                    ">

                    ${product.status}

                </span>

            </div>

            <div
                class="bankfleet-card-home__body">

                <h3
                    class="bankfleet-card-home__title">

                    ${product.title}

                </h3>

                <p
                    class="bankfleet-card-home__number">

                    ${product.number}

                </p>

            </div>

            <div
                class="bankfleet-card-home__footer">

                <span class="bankfleet-card-home__span">
                    Balance
                </span>

                <h2
                    class="bankfleet-card-home__amount">

                    ${product.balance}

                </h2>

            </div>

        </article>

    `).join("");

}

window.initBankfleetCards =
    initBankfleetCards;