var link = document.querySelector(".search-header");
var popup = document.querySelector(".modal-content");
var date1 = popup.querySelector("[name=arrival-date]");
var date2 = popup.querySelector("[name=departure-date]");
var number1 = popup.querySelector("[name=adults-number]");
var number2 = popup.querySelector("[name=children-number]");
var form = popup.querySelector("form");

window.onload=function() {
  popup.classList.add("modal-hidden");
}

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!date1.value || !date2.value || !number1.value || !number2.value) {
    console.log("Заполните все данные");
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

function initialize() {
  var mapCoordinates = new google.maps.LatLng(34.86898673,-111.75292969);
  var mapOptions = {
    zoom: 9,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.querySelector(".map-canvas"), mapOptions);
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
google.maps.event.addDomListener(window, "load", initialize);
