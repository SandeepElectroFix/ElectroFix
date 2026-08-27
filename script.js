/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT LIST
   MAIN JAVASCRIPT
========================================================= */





window.addEventListener("load", () => {

  const loadingScreen =
    document.getElementById("loading-screen");

  const app =
    document.getElementById("app");

  setTimeout(() => {

    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
    }

    if (app) {
      app.classList.remove("hidden");
    }

  }, 700);

});
