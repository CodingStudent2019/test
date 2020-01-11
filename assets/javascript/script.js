// simple map
 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.952583, lng: -75.165222},
          zoom: 10
        });
      }

// search-box input field
var searchinputbox = document.getElementById('searchboxinput');
map.controls[google.maps.ControlPosition.TOP].push(searchinputbox);