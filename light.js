document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    document.getElementById("toggleButton").addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});