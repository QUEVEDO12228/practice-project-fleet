async function initBankfleetCards() {
    const container = document.querySelector(".bankfleet-products__grid");
    if (!container) return;
    try {
        const response = await fetch("/frontend/src/data/bankfleet_cards_home.json");
        const products = await response.json();
        renderProducts( products, container);
        initBankfleetSlider();
    }
    catch(error) {console.error("Error loading bankfleet cards:", error);}
}
function renderProducts(products, container) {
    container.innerHTML =
        products.map(product => `
        <article class=" bankfleet-card-home bankfleet-card-home--${product.gradient}">
            <div class="bankfleet-card-home__top">
                <h3 class="bankfleet-card-home__title">${product.title}</h3>
                <span class=" bankfleet-card-home__status bankfleet-card-home__status--${product.status}">${product.status}</span>
            </div>
            <div
                class="bankfleet-card-home__body">
                <p class="bankfleet-card-home__number">${product.number}</p>
            </div>
            <div class="bankfleet-card-home__footer">
                <span class="bankfleet-card-home__span">Balance</span>
                <h2 class="bankfleet-card-home__amount">${product.balance}</h2>
            </div>
        </article>
    `).join("");
}
function initBankfleetSlider() {
    const viewport = document.querySelector(".bankfleet-products__viewport");
    const nextButton = document.querySelector( ".bankfleet-products__next");
    const icon = nextButton?.querySelector("img");
    if(
        !viewport ||
        !nextButton
    ) return;
    let position = 0;
    nextButton.addEventListener(
        "click",
        ()=>{
            const card =
                viewport.querySelector(
                    ".bankfleet-card-home"
                );
            if(!card) return;
            const gap =
                parseInt(
                    getComputedStyle(
                        viewport.querySelector(
                            ".bankfleet-products__grid"
                        )
                    ).gap
                ) || 0;
            const move =card.offsetWidth + gap;
            const maxScroll =
                viewport.scrollWidth -
                viewport.clientWidth;
            if(position < maxScroll){
                position += move;
                viewport.scrollTo({
                    left:position,behavior:"smooth"
                });
                if(icon){
                    icon.style.transform = "rotate(0deg)";
                }
            }
            else{
                position = 0;
                viewport.scrollTo({
                    left:0, behavior:"smooth"
                });
                if(icon){
                    icon.style.transform =
                    "rotate(180deg)";
                }
            }
        }
    );
}
window.initBankfleetCards =
    initBankfleetCards;