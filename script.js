/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT LIST
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loading-screen");

    if (!loadingScreen) {
        console.warn("Loading screen not found");
        return;
    }

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 700);

});
