

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

  firestore.collection("spiel").doc("test").onSnapshot(function(doc) {
    var myData = doc.data();
    var xy = myData.koordinaten.Latitude + " " + myData.koordinaten.Longitude;
    alert(xy);
  })



  function initAutocomplete() {
    var myLatLng = {lat: 45.363, lng: 9.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    mapTypeId: 'roadmap',
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}









