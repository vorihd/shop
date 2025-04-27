(function () {
  // Bloqueia teclas específicas
  document.addEventListener(
    "keydown",
    function (e) {
      var k = e.key.toLowerCase();
      if (
        (e.ctrlKey && (k === "s" || k === "u" || k === "p" || k === "a")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    },
    true
  );

  // Bloqueia clique direito e cópia (com verificação de compatibilidade)
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    // Em celular, reduz a agressividade
    document.addEventListener("contextmenu", (e) => e.preventDefault(), {
      passive: false,
    });
  } else {
    // Em PC bloqueia normal
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener("copy", (e) => e.preventDefault());
    document.addEventListener("selectstart", (e) => e.preventDefault());
  }

  // Monitoramento de requisições anormais
  var reqCount = 0;
  setInterval(() => {
    reqCount = 0;
  }, 5000);

  // Override fetch
  var _fetch = window.fetch;
  window.fetch = function () {
    reqCount++;
    if (reqCount > 50) {
      destroy();
    }
    return _fetch.apply(this, arguments);
  };

  // Override XHR
  var _xhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    reqCount++;
    if (reqCount > 50) {
      destroy();
    }
    return _xhrOpen.apply(this, arguments);
  };

  // Função que destrói a página
  function destroy() {
    try {
      document.documentElement.innerHTML = "";
      if (typeof window.stop === "function") window.stop();
    } catch (e) {}
  }
})();
