
 //For more documentation on the options, see
 //https://developers.google.com/maps/documentation/javascript/reference?csw=1
var marker;
 var infowindow;
let inptMessageComplete = ""


 function gotLocation(location, lat, long) {
//let inptMessage.value = inptMessage
//console.log(inptMessage.value)
     GoogleMap1.mapOptions.latitude = location.coords.latitude;
     GoogleMap1.mapOptions.longitude = location.coords.longitude;
     GoogleMap1.refresh();

     //Put a marker on our location
     point = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
     marker = GoogleMap1.setMarker({
         position: point
     });
     //Add an infoWindow to our marker
     infowindow = GoogleMap1.setInfoWindow("Message: " + inptMessage.value, marker);
     console.log("Lat: " + location.coords.latitude + " Lng: " + location.coords.longitude)
     NSB.WaitCursor(false);
 }
 
  btnLocation.onclick = function() {
     let inptMessageComplete = inptMessage.value
     console.log(inptMessageComplete)
     navigator.geolocation.getCurrentPosition(gotLocation);
     NSB.WaitCursor(true);
 };

 btnHideMarker.onclick = function() {
     if (typeof(marker) != "object") {
         return;
     };
     infowindow = undefined;
     marker.setMap(null);
     GoogleMap1.refresh();
 };


btnReturnHome.onclick=function(){
  ChangeForm(homepage)
}
