/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT LIST
   MAIN JAVASCRIPT
========================================================= */


/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

  const loadingScreen =
    document.getElementById("loading-screen");

  if (!loadingScreen) return;

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 700);

});
