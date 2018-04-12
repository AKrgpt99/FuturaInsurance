function loadMap() {
    let uluru = {lat: 43.658937, lng: -79.673475};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}