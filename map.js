function initMap() {
    // The location of Plattsburgh
    var plattsburgh = {lat: 44.6944968, lng: -73.467346};
    // The map, centered at Plattsburgh
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: plattsburgh});
    // The marker, positioned at Plattsburgh
    var marker = new google.maps.Marker({position: plattsburgh, map: map});
}