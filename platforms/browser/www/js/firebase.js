// Initialize Firebase
var config = {
  apiKey: "AIzaSyARMSjdUYP-5vUVgtb0_rXqtq3kv772ygA",
  authDomain: "testfabio-3a2e4.firebaseapp.com",
  databaseURL: "https://testfabio-3a2e4.firebaseio.com",
  projectId: "testfabio-3a2e4",
  storageBucket: "testfabio-3a2e4.appspot.com",
  messagingSenderId: "458824051953"
};
firebase.initializeApp(config);

var firestore = firebase.firestore();

/* Ray Button
document.getElementById("ray").addEventListener("click", createInnerHtml);

function createInnerHtml() {
  document.getElementById("koordinat").innerHTML = "Test";
}
*/

firestore.collection("spiel").doc("test").onSnapshot(function(doc) {
  console.log("Current data: ", doc && doc.data());
});
