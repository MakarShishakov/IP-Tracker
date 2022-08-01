import 'babel-polyfill';
import { validateIp, fillInfo} from "./helpers";

// Globals
const searchInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');


//Events
btn.addEventListener('click', getData);
searchInput.addEventListener('keydown', handleEnter);

//Basic logic
function getData () {
    if (validateIp(searchInput.value)) { 
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_VG1G7WJzfuHLWQc6m3rBS0FCoIQaP&ipAddress=${searchInput.value}`)
        .then(response => response.json())
        .then(fillInfo)
    }
};

function handleEnter (e) {
    if (e.key === 'Enter') {
         getData();
    }
};
    ymaps.ready(initMap);
    function initMap() {
      const myMap = new ymaps.Map("map", {
        center: [43.9785, 15.38404],
        zoom: 16
      });
      myMap.geoObjects
      .add(new ymaps.Placemark([43.9785, 15.38404], {
          balloonContent: '<strong>Место нахождения введенного IP</strong>'
      }, {
          preset: 'islands#icon',
          iconColor: '#0095b6'
      }))
    }