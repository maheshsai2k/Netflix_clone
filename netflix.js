const inputs = document.querySelectorAll(".input");
const allDetails = document.querySelectorAll("details");

inputs.forEach((input) => {
    input.addEventListener("input", (evt) => {
        const value = evt.target.value.trim();

        if (value.length > 0) {
            evt.target.classList.add("active");
        } else {
            evt.target.classList.remove("active");
        }
    });
});

allDetails.forEach((details) => {
    details.addEventListener("toggle", (evt) => {
        if (details.open) {
            allDetails.forEach((detail) => {
                if (detail !== evt.target && detail.open) {
                    detail.open = false;
                }
            });
        }
    });
});