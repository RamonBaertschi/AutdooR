/* Toggle Button zum Weitermachen */
function show() {
  document.getElementById('div1').style.display = 'inline';
}

/* Prüfen ob Startpunkt gesetzt */
function pruefen() {
  var empt = document.getElementById('koordinaten1').innerHTML;
  if (empt == null || empt == "") {
    alert("Bitte einen Startpunkt setzen");
    return false;
  } else {
    window.location.href = "admin02.html";
    return true;
  }
}
