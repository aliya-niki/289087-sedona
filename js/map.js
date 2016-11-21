function initialize() {
  var mapCoordinates = new google.maps.LatLng(34.86898673,-111.75292969);
  var mapOptions = {
  zoom: 9,
  center: mapCoordinates,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                              mapOptions);

  var icon = new google.maps.MarkerImage ({
        url: "img/ubicacion.png",
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 0)
      });

  var marker = new google.maps.Marker ({
    position: mapCoordinates,
    map: map,
    icon: icon
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
