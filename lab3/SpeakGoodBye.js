(function (window) {
  // Приватна змінна: не виходить у глобальну область видимості
  var speakWord = "Goodbye";

  var speakGoodBye = {};

  speakGoodBye.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Єдине, що експортується назовні
  window.speakGoodBye = speakGoodBye;
})(window);
