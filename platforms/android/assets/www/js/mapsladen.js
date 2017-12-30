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
    myData = doc.data();
    var x = myData.koordinaten.Latitude;
    var y = myData.koordinaten.Longitude;
    var z = new google.maps.LatLng(x, y);
    initMap(x, y)
    //alert(z);
  })
}

function initMap(x, y) {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(x, y),
    mapTypeId: 'roadmap'
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    position: new google.maps.LatLng(x, y)
  });
}
