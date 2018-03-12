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

    $('#2010').on('click', { year: "2010" }, travelTo);
    $('#2011').on('click', { year: "2011" }, travelTo);
    $('#2012').on('click', { year: "2012" }, travelTo);
    $('#2013').on('click', { year: "2013" }, travelTo);
    $('#2014').on('click', { year: "2014" }, travelTo);
    $('#2015').on('click', { year: "2015" }, travelTo);
    $('#2016').on('click', { year: "2016" }, travelTo);
    $('#2017').on('click', { year: "2017" }, travelTo);
    $('#2018').on('click', { year: "2018" }, travelTo);
    $('#all').on('click', { year: "all" }, travelTo);


    window.earth = earth;
}

var torontoMarker = WE.marker([43.653226, -79.383184]).bindPopup("<b>Toronto, Canada</b>", 100),
    tijuanaMarker = WE.marker([32.514947, -117.038247]).bindPopup("<b>Tijuana, Mexico</b>", 100),
    londonMarker = WE.marker([51.507351, -0.127758]).bindPopup("<b>London, England</b>", 100),
    weymouthMarker = WE.marker([50.6144, -2.4576]).bindPopup("<b>Weymouth, England</b>", 100),
    parisMarker = WE.marker([48.856614, 2.352222]).bindPopup("<b>Paris, France</b>", 100),
    corkMarker = WE.marker([51.896892, -8.486316]).bindPopup("<b>Cork, Ireland</b>", 100),
    reykjavikMarker = WE.marker([64.126521, -21.817439]).bindPopup("<b>Reykjavik, Iceland</b>", 100),
    klaksvikMarker = WE.marker([62.227192, -6.577906]).bindPopup("<b>Klaksvik, Faroe Islands</b>", 100),
    tokyoMarker = WE.marker([35.6895, 139.6917]).bindPopup("<b>Tokyo, Japan</b>", 100),
    kyotoMarker = WE.marker([35.0116, 135.7680]).bindPopup("<b>Kyoto, Japan</b>", 100),
    osakaMarker = WE.marker([34.6937, 135.5022]).bindPopup("<b>Osaka, Japan</b>", 100),
    seoulMarker = WE.marker([37.5665, 126.9780]).bindPopup("<b>Seoul, South Korea</b>", 100),
    vancouverMarker = WE.marker([49.282729, -123.120738]).bindPopup("<b>Vancouver, Canada</b>", 100),
    osloMarker = WE.marker([59.913869, 10.752245]).bindPopup("<b>Oslo, Norway</b>", 100),
    stockholmMarker = WE.marker([59.329323, 18.068581]).bindPopup("<b>Stockholm, Sweden</b>", 100),
    longyearbyenMarker = WE.marker([78.223172, 15.626723]).bindPopup("<b>Longyearbyen, Arctic Svalbard</b>", 100),
    hongkongMarker = WE.marker([22.396428, 114.109497]).bindPopup("<b>Hong Kong, China</b>", 100),
    macauMarker = WE.marker([22.1987, 113.5439]).bindPopup("<b>Macau, China</b>", 100),
    taipeiMarker = WE.marker([25.032969, 121.565418]).bindPopup("<b>Taipei, Taiwan</b>", 100),
    florenceMarker = WE.marker([43.769560, 11.255814]).bindPopup("<b>Florence, Italy</b>", 100),
    romeMarker = WE.marker([41.902783, 12.496366]).bindPopup("<b>Rome, Italy</b>", 100),
    naplesMarker = WE.marker([40.851775, 14.268124]).bindPopup("<b>Naples, Italy</b>", 100);
    visibleMarkers = [];

var travelInfo = {
    "2010": {
        displayText: "Canada",
        coordinates: [43.653226, -79.383184],
        markers: [torontoMarker]
    },
    "2011": {
        displayText: "Tijuana",
        coordinates: [32.514947, -117.038247],
        markers: [tijuanaMarker]
    },
    "2012": {
        displayText: "England/France/Ireland/Iceland/Faroe Islands",
        coordinates: [61.892635, -6.911806],
        markers: [londonMarker, weymouthMarker, parisMarker, corkMarker, reykjavikMarker, klaksvikMarker]
    },
    "2013": {
        displayText: "Japan/Korea",
        coordinates: [36.2048, 125.2529],
        markers: [tokyoMarker, kyotoMarker, osakaMarker, seoulMarker]
    },
    "2014": {
        displayText: "Canada",
        coordinates: [49.282729, -123.120738],
        markers: [vancouverMarker]
    },
    "2015": {
        displayText: "Norway / Sweden / The Arctic",
        coordinates: [59.913869, 10.752245],
        markers: [osloMarker, stockholmMarker, longyearbyenMarker]
    },
    "2016": {
        displayText: "Hong Kong / Taiwan",
        coordinates: [22.396428, 114.109497],
        markers: [hongkongMarker, macauMarker, taipeiMarker]
    },
    "2017": {
        displayText: "Italy",
        coordinates: [41.871940, 12.567380],
        markers: [florenceMarker, romeMarker, naplesMarker]
    },
    "2018": {
        displayText: "?",
        coordinates: [],
        markers: {

        }
    },
}; 




function travelTo(e) {
    var year = e.data.year;
    var coordinates = travelInfo[year].coordinates;
    var markers = travelInfo[year].markers;

    visibleMarkers.forEach(function(marker) {
        marker.removeFrom(earth);
    });

    visibleMarkers = [];

    earth.panTo(coordinates);

    markers.forEach(function(marker) {
        marker.addTo(earth);
        marker.openPopup();
        visibleMarkers.push(marker);
    });

}

function closeAllPopups() {

}











































