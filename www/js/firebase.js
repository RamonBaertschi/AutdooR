var firestore = firebase.firestore();
var db;

document.getElementById("startpunkt").addEventListener("click", function() {
  db = firestore.collection("test5").doc("test6").set({test: "test7"});
  //alert("Datenbank");
});
