 var map;

function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
  center: {
   lat: 39.952583,
   lng: -75.165222
  },
  zoom: 10
 });

 var marker = new google.maps.Marker({
  position: {
   lat: 39.952583,
   lng: -75.165222
  },
  map: map,
  title: 'Milestone Project Two'
 });
}