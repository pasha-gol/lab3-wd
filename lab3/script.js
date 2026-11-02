(function () {
  // Масив імен залишається в локальній області видимості IIFE
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  // ---------- Завдання 1.2.2 ----------
  console.log("=== Варіант 1: селекція за першою літерою (J/j -> Goodbye) ===");
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      speakGoodBye.speak(names[i]);
    } else {
      speakHello.speak(names[i]);
    }
  }

  // ---------- Завдання 1.2.3 ----------
  console.log("");
  console.log("=== Варіант 2: селекція за сумою ASCII-кодів літер імені ===");
  console.log("Підхід: обчислюється сума кодів усіх літер імені (charCodeAt). " +
              "Якщо сума > 450 — Goodbye, інакше — Hello.");

  var THRESHOLD = 450;

  for (var j = 0; j < names.length; j++) {
    var sum = 0;
    for (var k = 0; k < names[j].length; k++) {
      sum += names[j].charCodeAt(k);
    }

    console.log("[сума ASCII = " + sum + "]");
    if (sum > THRESHOLD) {
      speakGoodBye.speak(names[j]);
    } else {
      speakHello.speak(names[j]);
    }
  }
})();
