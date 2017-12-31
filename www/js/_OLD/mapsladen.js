window.onload = function() {

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
}

alert(xy);

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
      markers.push(new google.maps.Marker({draggable: false, map: map, icon: icon, title: place.name, position: xy}));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }

    });
    map.fitBounds(bounds);
  });
}