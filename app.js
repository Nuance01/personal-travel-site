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

var travelInfo = {
    "2010": {
        displayText: "Canada",
        coordinates: [43.653226, -79.383184],
        markers: {
            toronto: [43.653226, -79.383184]
        }
    },
    "2011": {
        displayText: "Tijuana",
        coordinates: [32.514947, -117.038247],
        markers: {
            tijuana: [32.514947, -117.038247]
        }
    },
    "2012": {
        displayText: "England/France/Ireland/Iceland/Faroe Islands",
        coordinates: [61.892635, -6.911806],
        markers: {
            london: [51.507351, -0.127758],
            paris: [48.856614, 2.352222],
            cork: [51.896892, -8.486316],
            reykjavik: [64.126521, -21.817439],
            klaksvik: [62.227192, -6.577906]
        }
    },
    "2013": {
        displayText: "Japan/Korea",
        coordinates: [36.2048, 125.2529],
        markers: {
            tokyo: [35.6895, 139.6917], 
            kyoto: [35.0116, 135.7680], 
            osaka: [34.6937, 135.5022],
            seoul: [37.5665, 126.9780]
        }     
    },
    "2014": {
        displayText: "Canada",
        coordinates: [49.282729, -123.120738],
        markers: {
            vancouver: [49.282729, -123.120738]

        }
    },
    "2015": {
        displayText: "Norway / Sweden / The Arctic",
        coordinates: [59.913869, 10.752245],
        markers: {
            oslo: [59.913869, 10.752245],
            stockholm: [59.329323, 18.068581],
            longyearbyen: [78.223172, 15.626723]
        }
    },
    "2016": {
        displayText: "Hong Kong / Taiwan",
        coordinates: [22.396428, 114.109497],
        markers: {
            hongkong: [22.396428, 114.109497],
            taipei: [25.032969, 121.565418]
        }
    },
    "2017": {
        displayText: "Italy",
        coordinates: [41.871940, 12.567380],
        markers: {
            florence: [43.769560, 11.255814],
            rome: [41.902783, 12.496366],
            naples: [40.851775, 14.268124]
        }
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

    earth.panTo(coordinates);

    for (var city in markers) {
        WE.marker(markers[city]).addTo(earth);
    }

}