document.addEventListener("DOMContentLoaded", function () {
    const characterData = localStorage.getItem("character");
    const appDiv = document.getElementById("app");

    if (!characterData) {
        fetch("/static/html/create_character.html")
            .then(response => response.text())
            .then(html => {
                appDiv.innerHTML = html;
                const script = document.createElement("script");
                script.src = "/static/js/charactercreation.js";
                script.defer = true;
                document.body.appendChild(script);
            });
    } else {
        fetch("/static/html/character.html")
            .then(response => response.text())
            .then(html => {
                appDiv.innerHTML = html;
                const script = document.createElement("script");
                script.src = "/static/js/character.js";
                script.defer = true;
                document.body.appendChild(script);
            });
    }
});
