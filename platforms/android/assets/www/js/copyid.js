function copySpiel() {
  var copyText = document.getElementById("spielNo");
  copyText.select();
  document.execCommand("Copy");
  alert("Herzlichen Glückwunsch du hast es geschafft. Spiel-Nummer kopiert: " + copyText.value);
}

function exitFromApp()
{
     navigator.app.exitApp();
}