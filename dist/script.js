var mymap = L.map('map').setView([32.7859, 34.9614], 18); //coordinates of elbit
var isGoogle = false; //when google map is shown
var OpenStreetMapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var googleLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
function toggleLayer(e) {
    if (!e.originalEvent.shiftKey)
        return;
    if (this.isGoogle) {
        mymap.removeLayer(googleLayer);
        OpenStreetMapLayer.addTo(mymap);
    }
    else {
        mymap.removeLayer(OpenStreetMapLayer);
        googleLayer.addTo(mymap);
    }
    this.isGoogle = !this.isGoogle;
}
OpenStreetMapLayer.addTo(mymap);
mymap.on('click', function (e) { toggleLayer(e); });
mymap.on('mousemove', mapmousemove);
function mapmousemove(e) {
    var h = document.getElementById('myHeader');
    h.innerHTML = 'The coordinates are: lat:' + Math.round(e.latlng.lat * 10000) / 10000 + "  / lng: " + Math.round(e.latlng.lng * 10000) / 10000;
}
