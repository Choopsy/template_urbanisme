/* Portfolio « Carnet de terrain » */
(function () {
  "use strict";

  /* Année du pied de page */
  var annee = document.getElementById("annee");
  if (annee) annee.textContent = String(new Date().getFullYear());

  /* Sélecteur de papier : quadrillé, kraft ou millimétré.
     On peut aussi ouvrir le site avec ?papier=kraft ou ?papier=millimetre. */
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-paper-choice]");
  if (!buttons.length) return;

  var PAPERS = ["quadrille", "kraft", "millimetre"];

  function setPaper(paper) {
    if (PAPERS.indexOf(paper) === -1) paper = "quadrille";
    if (paper === "quadrille") root.removeAttribute("data-paper");
    else root.setAttribute("data-paper", paper);
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-paper-choice") === paper));
    });
    try { localStorage.setItem("papier", paper); } catch (e) { /* stockage indisponible */ }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setPaper(b.getAttribute("data-paper-choice")); });
  });

  var fromUrl = null;
  try { fromUrl = new URLSearchParams(window.location.search).get("papier"); } catch (e) {}
  var saved = null;
  try { saved = localStorage.getItem("papier"); } catch (e) {}
  setPaper(fromUrl || saved || root.getAttribute("data-paper") || "quadrille");
})();
