export function setupGoogleMap(googleMapApiKey : string) {
    let script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';  
    script.async = true;
    script.defer = true;  
    script.src = `https://maps.googleapis.com/maps/api/js?key=${addThisId}&callback=initMap`;
    document.getElementsByTagName('body')[0].appendChild(script);

    
    // window.initMap = function () {
    //     var map = new google.maps.Map(document.getElementById('googleMap'), {
    //         zoom: 8,
    //         center: {
    //             lat: 2.5069505,
    //             lng: 103.0704846
    //         },
    //         scrollwheel: false,
    //         styles: [
    //             {
    //                 "featureType": "landscape.man_made",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#f7f1df"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "landscape.natural",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#d0e3b4"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "landscape.natural.terrain",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi",
    //                 "elementType": "labels",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi.business",
    //                 "elementType": "all",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi.medical",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#fbd3da"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi.park",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#bde6ab"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road",
    //                 "elementType": "geometry.stroke",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road",
    //                 "elementType": "labels",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "#ffe15f"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway",
    //                 "elementType": "geometry.stroke",
    //                 "stylers": [
    //                     {
    //                         "color": "#efd151"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.arterial",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "#ffffff"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.local",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "black"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "transit.station.airport",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "#cfb2db"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "water",
    //                 "elementType": "geometry",
    //                 "stylers": [
    //                     {
    //                         "color": "#a2daf2"
    //                     }
    //                 ]
    //             }
    //         ]
    //     });

    //     //molek
    //     var marker = new google.maps.Marker({
    //         position: {
    //             lat: 1.5318005,
    //             lng: 103.7914846
    //         },
    //         map: map,
    //         icon: '/content/images/contactDropPoint.png',
    //         url: 'https://www.google.com/maps/place/KLC+Molek/@1.5318005,103.7914846,16.74z/data=!4m5!3m4!1s0x31da6c472323bc11:0x17240bebf85cbe92!8m2!3d1.5316726!4d103.7914098'
    //     });

    //     marker.addListener('click', function () {
    //         window.open(this.url, '_blank');
    //     });
    // }
}





