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
