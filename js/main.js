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

function swtchTabs(btns, tabs) {
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btns.forEach((btn) => btn.classList.remove("is-active"));
            btn.classList.add("is-active");

            tabs.forEach((tab) => tab.classList.remove("is-show"));
            tabs.forEach((tab) => {
                if (tab.dataset.infotab === btn.dataset.btntab) {
                    tab.classList.add("is-show");
                }
            });
        });
    });
}

const buttons = document.querySelectorAll(".tab-buttons button");
const tabs = document.querySelectorAll(".tab-info article");
swtchTabs(buttons, tabs);
