const themeButton = document.getElementById("themeToggle");


function searchGames() {
    let input = document.getElementById("search").value.toLowerCase();
    let games = document.querySelectorAll(".game-card");

    games.forEach(game => {
        if (game.innerText.toLowerCase().includes(input)) {
            game.style.display = "block";
        }

        else {
            game.style.display = "none";
        }
    });
}

document.getElementById("contactForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please complete all fields");

        return;
    }

    alert("Thanks for contacting Sidequest Cafe!");
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

updateThemeIcon();
