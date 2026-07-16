export function initPrimaryButtons() {

    console.log("initPrimaryButtons");

    document.querySelectorAll(".bankfleet-btn--expand").forEach(btn => {
        console.log(btn);

        btn.addEventListener("mouseenter", () => {
            console.log("hover");
            btn.classList.add("is-expanded");
        });

        btn.addEventListener("mouseleave", () => {
            btn.classList.remove("is-expanded");
        });

    });

}