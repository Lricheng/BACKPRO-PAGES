(function () {
  var STORAGE_KEY = "backpro-pages-lang";

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }
    var browser = (navigator.language || "en").toLowerCase();
    return browser.indexOf("zh") === 0 ? "zh" : "en";
  }

  function setLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.documentElement.dataset.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-lang-btn]").forEach(function (button) {
      var active = button.dataset.langBtn === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLang(detectLang());

    document.querySelectorAll("[data-lang-btn]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLang(button.dataset.langBtn);
      });
    });
  });
})();
