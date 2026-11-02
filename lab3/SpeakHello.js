(function (window) {
  // Приватна змінна: не виходить у глобальну область видимості
  var speakWord = "Hello";

  var speakHello = {};

  speakHello.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Єдине, що експортується назовні
  window.speakHello = speakHello;
})(window);
