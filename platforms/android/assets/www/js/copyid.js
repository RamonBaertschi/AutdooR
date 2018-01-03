function copySpiel() {
  var copyText = document.getElementById("spielNo");
  copyText.select();
  document.execCommand("Copy");
  alert("Herzlichen Glückwunsch, du hast es geschafft. Die Spiel-Nummer " + copyText.value + " wurde kopiert");
}

function exitToStartPage() {
  window.location.href = "index.html";
}

function exitFromApp() {
  navigator.app.exitApp();
}
