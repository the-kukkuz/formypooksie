function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Pooksie" && password === "16-11-2024") {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("heart-transition").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("heart-transition").classList.add("hidden");
            document.getElementById("main-content").classList.remove("hidden");
        }, 2000);
    } else {
        document.getElementById("error-message").textContent = "Oops! Wrong username or password.";
    }
}

function nextPage() {
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("quote-page").classList.remove("hidden");
}

function finalPage() {
    document.getElementById("quote-page").classList.add("hidden");
    document.getElementById("final-page").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 4; // 4 images
        carousel.style.transform = `translateX(-${index * 25}%)`;
    }, 5000); // Slower transition, changes every 5 seconds
});

