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
        { //Mosquée ben Abdullah
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //theatre
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //tramway
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //Restaurant
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //Parking
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //Monuments
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //Loisir
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //Hotels
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //evenements
            coords:{lat:35.70027440982651,lng:-0.6499302542152523},
            IconImage:'images/icone_theatre_regional_doran.svg',
            content:`<h1 style="text-align: center;">Mosquée</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>About</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },

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