function addArrow(items) {
    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((item) => item.classList.remove("is-arrow"));
            item.classList.add("is-arrow");
        });
    });
}

const links = document.querySelectorAll(".click-link");
addArrow(links);
