const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slide .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button);
        });
    });
}

window.addEventListener("load", initSlider);