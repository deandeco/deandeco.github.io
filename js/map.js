var map, marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18,
    disableDefaultUI: true

        
  });

var image = '/../css/images/position.png';
var beachMarker = new google.maps.Marker({
    map: map,
    icon: image
  
  });

  marker = new google.maps.Marker;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

var myLatlng = new google.maps.LatLng(pos);
var mapOptions = {
  zoom: 18,
  center: myLatlng,
  map: map,
  icon: beachMarker,
  disableDefaultUI: true
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    icon: beachMarker,
    map: map,
    disableDefaultUI: true
});

// To add the marker to the map, call setMap();
marker.setMap(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}