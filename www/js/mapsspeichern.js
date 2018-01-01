var spielId = spielIdErstellen();
// alert(spielId);

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

function initAutocomplete() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 47.566952,
      lng: 9.106098
    },
    zoom: 13,
    mapTypeId: 'roadmap',
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({draggable: false, map: map, icon: icon, title: place.name, position: place.geometry.location}));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }

      document.getElementById("koordinaten1").innerHTML = place.geometry.location.lat();
      document.getElementById("koordinaten2").innerHTML = place.geometry.location.lng();

      // Koordinaten in Firebase speichern
      document.getElementById("startpunktSetzen").addEventListener("click", function() {
        firestore.collection("spiel").doc("test").set({
          koordinaten: {
            Latitude: place.geometry.location.lat(),
            Longitude: place.geometry.location.lng(),
            Datum: new Date(),
            id: spielId
          }
        });
      });

      /* Koordinaten mit Button laden
      document.getElementById("ladenx").addEventListener("click", function() {
        alert("laden");
        firestore.collection("spiel").doc("test").get().then(function(doc) {
          var myData = doc.data();
          document.getElementById("koordinat1").innerHTML = myData.koordinaten.Latitude;
          document.getElementById("koordinat2").innerHTML = myData.koordinaten.Longitude;
        })
      });
      */

      /* Koordinaten von Firebase laden (automatisch)
      firestore.collection("spiel").doc("test").onSnapshot(function(doc) {
        const myData = doc.data();
        document.getElementById("koordinat1").innerHTML = myData.koordinaten.Latitude;
        document.getElementById("koordinat2").innerHTML = myData.koordinaten.Longitude;
      })
      */
    });
    map.fitBounds(bounds);
  });
}
