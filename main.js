function initMap(){

    //Map options
    var options = {
        zoom:12,
        maxZoom: 18,
        minZoom: 10,
        center:{lat:35.6987,lng:-0.6349}
    }
    
    //New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    /*
    //Add Marker
    var marker = new google.maps.Marker({
        position:{lat:35.7631043,lng:-0.793972},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    //Add infowindow
    var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Oran Beach</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
    */


    // Array of markers

    var markers = [
        {
            coords:{lat:35.7631043,lng:-0.793972},
            IconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content:'<h1>beach oran</h1>'
        },
        {
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1>Mosquée</h1> <br><div class="about-section-pop-up"><div class="grid-item1-pop-up"><img src="images/mosque-ben-abdullah.png" alt=""></div><div class="grid-item2-pop-up"><h2>About</h2> <p>Je suis une section about</p></div></div>`


        },
        {
            coords:{lat:35.69409262830724,lng:-0.6344255965496619}
        }

    ];

    //Loop through markers
    for (var i = 0;i< markers.length;i++){
        // Add marker
        addMarker(markers[i]);
    }


    //Add Marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            //icon:props.IconImage
        });

        //Check for custom icon
        if(props.IconImage){
            //Set icon image
            marker.setIcon(props.IconImage);
        }

        //Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }

        
    }
}