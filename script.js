
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".hero-image");

    images.forEach((image) => {
        image.addEventListener("mouseenter", () => {
            images.forEach((img) => {
                if (img !== image) {
                    img.style.filter = "grayscale(100%)";
                }
            });
            image.style.transform = "scale(1.2)";
        });

        image.addEventListener("mouseleave", () => {
            images.forEach((img) => {
                img.style.filter = "grayscale(0%)";
                img.style.transform = "scale(1)";
            });
        });

        image.addEventListener("mousemove", (event) => {
            let rect = image.getBoundingClientRect();
            let x = event.clientX - rect.left - rect.width / 2;
            let y = event.clientY - rect.top - rect.height / 2;
            image.style.transform = `scale(1.2) translate(${x * 0.05}px, ${y * 0.05}px)`;
        });
    });
});
