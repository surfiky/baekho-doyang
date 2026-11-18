/* Medición de visitas con Umami (https://umami.is): sin cookies, sin guardar la IP.
   1. Crea la web en Umami Cloud y pega aquí su «Website ID».
   2. Para que no cuenten tus propias visitas, abre una vez la página con ?yo al final
      (por ejemplo https://surfiky.github.io/baekho-doyang/?yo) en cada navegador que uses. */
(function () {
  var WEBSITE_ID = "";
  try { if (/[?&]yo\b/.test(location.search)) localStorage.setItem("umami.disabled", "1"); } catch (e) {}
  window.track = function (nombre, datos) { try { if (window.umami) window.umami.track(nombre, datos); } catch (e) {} };
  if (!WEBSITE_ID) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://cloud.umami.is/script.js";
  s.setAttribute("data-website-id", WEBSITE_ID);
  document.head.appendChild(s);
  // Tiempo de lectura: solo cuenta mientras la página está a la vista.
  var visto = 0, hitos = [30, 120, 300];
  setInterval(function () {
    if (document.visibilityState !== "visible") return;
    visto += 5;
    if (hitos.length && visto >= hitos[0]) { var t = hitos.shift(); window.track(t < 60 ? "tiempo " + t + " s" : "tiempo " + t / 60 + " min"); }
  }, 5000);
})();
