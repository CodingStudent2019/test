 var map;

function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
  center: {
   lat: 39.952583,
   lng: -75.165222
  },
  zoom: 10
   mapTypeId: 'roadmap'
 });

 marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 39.952583, lng: -75.165222}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function drop() {
  for (var i =0; i < markerArray.length; i++) {
    setTimeout(function() {
      addMarkerMethod();
    }, i * 600);
  }

var input = document.getElementById('searchboxinput');

var searchBox = new google.maps.places.SearchBox(input, {
  bounds: defaultBounds
});



}
