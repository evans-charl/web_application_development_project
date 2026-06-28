const themeButton = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");


function searchGames() {
    let input = document.getElementById("searchGames").value.toLowerCase();
    let games = document.querySelectorAll(".game-card");

    games.forEach(game => {
        if (game.innerText.toLowerCase().includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

function searchMenu() {
    let input = document.getElementById("searchMenu").value.toLowerCase();
    let menu = document.querySelectorAll(".menu-card");

    menu.forEach(menu => {
        if (menu.innerText.toLowerCase().includes(input)) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let formMessage = document.getElementById("formMessage");
    let valid = true;

    [name, email, message].forEach(field => {
        field.classList.remove("is-valid", "is-invalid");
    });

    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        valid = false;
    } else {
        name.classList.add("is-valid");
    }

    if (!validateEmail(email.value)) {
        email.classList.add("is-invalid");
        valid = false;
    } else {
        email.classList.add("is-valid");
    }

    if (message.value.trim() === "") {
        message.classList.add("is-invalid");
        valid = false;
    } else {
        message.classList.add("is-valid");
    }

    if (valid) {
        formMessage.innerHTML = `<div class="alert alert-success">Thanks ${name.value}! Your message has been sent. We will get back to you soon.</div>`;
        contactForm.reset();
    }
});


function updateThemeIcon(){
    if(document.body.classList.contains("dark-mode")){
        themeButton.innerHTML = "☀️";
    }
    else{
        themeButton.innerHTML = "🌙";
    }
}

themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    let darkEnabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", darkEnabled);
    updateThemeIcon();
});

if(localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

const galleryImages = document.querySelectorAll(".gallery-image");
const modalImage = document.getElementById("modalImage");

galleryImages.forEach(image => {
    image.addEventListener("click",() => {
        modalImage.src = image.src;
    });
});

updateThemeIcon();
