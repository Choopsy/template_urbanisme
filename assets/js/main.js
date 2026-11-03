/* Portfolio · Meryem Aoujil */
(function () {
  "use strict";

  /* ---------- Année du pied de page ---------- */
  var annee = document.getElementById("annee");
  if (annee) annee.textContent = String(new Date().getFullYear());

  /* ---------- Comparateurs avant / après ---------- */
  document.querySelectorAll(".compare__frame").forEach(function (frame) {
    var range = frame.querySelector(".compare__range");
    if (!range) return;
    var update = function () { frame.style.setProperty("--pos", range.value + "%"); };
    range.addEventListener("input", update);
    update();
  });

  /* ---------- Visionneuse d'images ---------- */
  var box = document.getElementById("lightbox");
  if (box && typeof box.showModal === "function") {
    var boxImg = document.getElementById("lightbox-img");
    var boxCap = document.getElementById("lightbox-caption");
    var boxCount = document.getElementById("lightbox-count");
    var boxOpen = document.getElementById("lightbox-open");
    var prev = document.getElementById("lightbox-prev");
    var next = document.getElementById("lightbox-next");
    var items = [];
    var index = 0;

    var show = function (i) {
      index = (i + items.length) % items.length;
      var a = items[index];
      boxImg.src = a.getAttribute("href");
      boxImg.alt = a.getAttribute("data-caption") || "";
      boxCap.textContent = a.getAttribute("data-caption") || "";
      boxOpen.href = a.getAttribute("href");
      boxCount.textContent = items.length > 1 ? (index + 1) + " / " + items.length : "";
      prev.hidden = next.hidden = items.length < 2;
    };

    document.addEventListener("click", function (ev) {
      var a = ev.target.closest("a[data-gallery]");
      if (!a || ev.metaKey || ev.ctrlKey || ev.shiftKey) return;
      ev.preventDefault();
      var name = a.getAttribute("data-gallery");
      items = Array.prototype.slice.call(document.querySelectorAll('a[data-gallery="' + name + '"]'));
      show(items.indexOf(a));
      box.showModal();
    });

    prev.addEventListener("click", function () { show(index - 1); });
    next.addEventListener("click", function () { show(index + 1); });
    document.getElementById("lightbox-close").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (ev) {
      if (ev.target === box || ev.target.classList.contains("lightbox__figure")) box.close();
    });
    box.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowLeft") show(index - 1);
      if (ev.key === "ArrowRight") show(index + 1);
    });
    box.addEventListener("close", function () { boxImg.src = "data:,"; });

    /* balayage sur téléphone */
    var startX = null;
    box.addEventListener("touchstart", function (ev) { startX = ev.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (ev) {
      if (startX === null || items.length < 2) return;
      var dx = ev.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

})();
