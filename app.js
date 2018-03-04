function initialize() {
    var options = { 
        altitude: 12000000,
        sky: true,
        atmosphere: true
    }
    var earth = new WE.map('earth_div', options);
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
    earth.setView([40.0522, -95.2437]);
    var homeMarker = WE.marker([34.0522, -118.2437]).addTo(earth);
    homeMarker.bindPopup('<b>Home</b>');

    window.earth = earth;
}

