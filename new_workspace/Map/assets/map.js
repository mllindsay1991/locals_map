 var want_to_pin = false;
var map = new L.Map('map');

// create the tile layer with correct attribution
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © OpenStreetMap contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 18, attribution: osmAttrib});		

// start the map in South-East England
map.setView(new L.LatLng(51.3, 0.7),9);
map.addLayer(osm);
function onDblClick(e) {
	if ( want_to_pin ) {
		var popup = L.popup(e.latlng)
		    .setLatLng([51.5, -0.09])
		    .setContent("I am a standalone popup.")
		    .openOn(map); } else {} }
	map.on('dblclick', onDblClick);
