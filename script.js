let total = 0;

const totalText =
document.getElementById("total");

const fill =
document.getElementById("fill");

const button =
document.getElementById("addBtn");

button.addEventListener("click", () => {

    const amount = Number(
        prompt("Enter deposit amount:")
    );

    if (!amount || amount <= 0) {
        return;
    }

    total += amount;

    totalText.textContent =
        total + " SAR";

    const fillPercent =
        Math.min(total / 50, 100);

    fill.style.height =
        fillPercent + "%";

});
