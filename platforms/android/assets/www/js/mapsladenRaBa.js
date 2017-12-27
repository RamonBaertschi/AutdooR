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

function getCoords() {
  firestore.collection("spiel").doc("test").onSnapshot(function(doc) {
    var myData = doc.data();
    var x = myData.koordinaten.Latitude;
    var y = myData.koordinaten.Longitude;
    alert(x);
    alert(y);
    return new google.maps.LatLng(x, y);
  })
}

function initAutocomplete() {

  var coords = getCoords();

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    mapTypeId: 'roadmap',
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    center: coords
  });

  marker = new google.maps.Marker({position: coords, map: map});
}