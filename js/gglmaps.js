'use strict'
let point;
let map;
let marker;

function initMap() {

	let uluru = {lat: 53.895889 , lng: 27.554991};
	map = new google.maps.Map(document.getElementById('google-map'), {
		zoom: 10,
		center: uluru
	});
	marker = new google.maps.Marker({
		position: uluru,
		map: map,
		draggable:true,
		title:"Drag me!",
	});
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		 uluru = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};

		map.setCenter(uluru);
		marker.setPosition(uluru);
		}, function() {
					console.log('noGeo')
			});
	}

	google.maps.event.addListener(marker, "dragend", function(event) {
		point = marker.getPosition();// новые координаты маркера: point.lat() и point.lng()
		console.log(point.lat(),point.lng())
	});

}
