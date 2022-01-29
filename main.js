function initMap(){

    //Map options
    var options = {
        zoom:14,
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
            content:`<h1 style="text-align: center;">Mosquée Abdellah Ben Salem</h1> <br>
            <hr>
            <div class="about-section-pop-up">
                <div class="grid-item1-pop-up"><img class="image-pop-up" src="images/mosque-ben-abdullah.png" alt=""></div>
                <div class="grid-item2-pop-up"><h2>à propos</h2> 
                    <p>The Abdellah Ben Salem Mosque is a mosque in Oran, Algeria. Formerly the Great Synagogue of Oran), it was the largest synagogue in Africa , Also known as jews Temple, it is located on Boulevard Joffre, currently Boulevard Maata Mohamed El Habib.


                    Its construction began in 1879 at the initiative of the French, and took 38 years to complete. Once Algeria gained its independence in 1962, almost all Algerian Jews, who were considered French citizens since the Crémieux Decree of 1870, relocated to France alongside the Pied-Noir (french that were born and lived in Algeria) community. In 1975, the synagogue was converted into a mosque and named after Abdullah ibn Salam, a seventh-century Jew from Medina and companion of Muhammad who converted to Islam.
                    
                    opening hours : everyday all time except in prayer times
                    </p> <br> <hr>
                    <p>C'est la plus belle mosquée que j'ai visité de toute ma vie !!!!!!!!!</p> <br>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>`


        },
        {   //lieux de loisir
            coords:{lat:35.703376185286515,lng:-0.650120428791579},
            IconImage:'images/icone_Lieux_De_Loisirs.svg',
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
            coords:{lat:35.703091877885086,lng:-0.59593973938875},
            IconImage:'images/icone_Station_De_Tramway.svg',
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
            coords:{lat:35.70940833719052,lng:-0.6214963744114093},
            IconImage:'images/Icone_Restaurants.svg',
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
            coords:{lat:35.70940722579518,lng:-0.6570279608898758},
            IconImage:'images/Icone_Parking.svg',
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
        {   //Monuments Santa Cruz
            coords:{lat:35.70928092992421,lng:-0.6650650659655842},
            IconImage:'images/Icone_monuments.svg',
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
        {   //Loisir parc d'attraction
            coords:{lat:35.692812718718535,lng:-0.6411502311308215},
            IconImage:'images/Icone_Lieux_De_Loisirs.svg',
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
            coords:{lat:35.70228059701139,lng:-0.6422976782824164},
            IconImage:'images/Icone_Hotels.svg',
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
            coords:{lat:35.68285430033291,lng:-0.6557638184552692},
            IconImage:'images/Icone_evenements.svg',
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

//Fetch data from "WEATHER" Api
// const weatherUrl = 'https://monobort.herokuapp.com/weather';
//   fetch(weatherUrl)
//      .then(res => res.json())
//      .then(data => console.log(data))


const weatherUrl = 'https://monobort.herokuapp.com/weather';
const covidUrl = 'https://monobort.herokuapp.com/covid';
const prayerUrl = 'https://monobort.herokuapp.com/salat';

//for the principal weather Card
const TheWeekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//for the other weather small cards
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const d = new Date();
let arrayDay = d.getDay();

//Get the Arrays Number
let arrayToday = arrayDay
let arrayDayAfter = arrayDay + 1
let arrayTwoDayAfter = arrayDay + 2
let arrayThreeDayAfter = arrayDay + 3


//Get the days names
let today = TheWeekday[arrayToday];
let smalltoday = weekday[arrayToday];
let DayAfter = weekday[arrayDayAfter];
let twoDayAfter = weekday[arrayTwoDayAfter];
let threeDayAfter = weekday[arrayThreeDayAfter];



async function getWeatherData() {
        
    const response = await fetch(weatherUrl)
        const data = await response.json();
        const {temp, pressure, humidity, wind, description} = data
        const weatherOran = document.getElementById('temp').textContent = `${temp}°C`;
        const todayWeatherOran = document.getElementById('today-temp').textContent = `${temp}°C`;
        const pressureOran = document.getElementById('pressure').textContent = `${pressure} hpa`;
        const humidityOran = document.getElementById('valuehumidity').textContent = `${humidity} %`;
        const windOran = document.getElementById('wind').textContent = `${wind} m/s`;
        const weatherDescriptionOran = document.getElementById('weatherDescription').textContent = `${description}`;
        
        //Days
        const dayOran = document.getElementById('day').textContent = `${today}`;
        const smallToday = document.getElementById('small-today').textContent = `${smalltoday}`;
        const smallDayAfter = document.getElementById('small-dayafter').textContent = `${DayAfter}`;
        const smallTwoDayAfter = document.getElementById('small-twodayafter').textContent = `${twoDayAfter}`;
        const smallThreeDayAfter = document.getElementById('small-threedayafter').textContent = `${threeDayAfter}`;

}

getWeatherData();

async function getCovidData() {
        
    const response = await fetch(covidUrl)
    const data = await response.json();
    const {newConfirmed, newDeaths, newRecovered} = data

    const newCovidCases = document.getElementById('new-cases').textContent = `${newConfirmed}`;
    const newCovidDeaths = document.getElementById('new-deaths').textContent = `${newDeaths}`;
    const newCovidRecovered = document.getElementById('new-recovered').textContent = `${newRecovered}`;
        

}

getCovidData();

async function getPrayerData() {
        
    const response = await fetch(prayerUrl)
    const data = await response.json();
    const {Fajr, Dhuhr, Asr, Maghrib, Isha} = data

    const fajrPrayer = document.getElementById('fajr-time').textContent = `${Fajr.substring(0,5)}`;
    const dhuhrPrayer = document.getElementById('dhuhr-time').textContent = `${Dhuhr.substring(0,5)}`;
    const asrPrayer = document.getElementById('asr-time').textContent = `${Asr.substring(0,5)}`;
    const maghrebPrayer = document.getElementById('maghreb-time').textContent = `${Maghrib.substring(0,5)}`;
    const ishaPrayer = document.getElementById('isha-time').textContent = `${Isha.substring(0,5)}`;


    console.log(data)
        
    

}

getPrayerData();