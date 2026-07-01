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

    var buttons = document.querySelectorAll("[data-lang-btn]");
    buttons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.langBtn === lang);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = detectLang();
    setLang(lang);

    document.querySelectorAll("[data-lang-btn]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLang(button.dataset.langBtn);
      });
    });
  });
})();
