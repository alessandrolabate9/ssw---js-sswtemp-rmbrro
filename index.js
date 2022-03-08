// Import stylesheets
import './style.css';

const cityElems = Array.from(document.getElementsByClassName('città'));
console.log(cityElems.length);
const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
for (let e of cityElems){
  e.onclick = display(e.innerHTML);
}

var calcola_media = document.getElementById("media");
calcola_media.onclick = () => {
  for(let elem of cityElems)  media += calc_avg(elem.innerHTML);
  media = media/cityElems.length;
  document.getElementById("risposta_media").innerHTML = media;
};
function calc_avg(city){
  var request = new XMLHttpRequest();
  var temperatura;
  request.onload = main_temperature;
  function main_temperature(){
      if (request.status === 200){
          var dataObject = JSON.parse(request.response);
          temperatura = dataObject.main.temp;
          console.log("1 - ",temperatura);
          return temperatura;
      }
      else{
        window.alert("Errore!");
      }
  };
  request.open('GET', URL + city, true);
  request.send();
  console.log("2 - ", temperatura);
  return main_temperature;
};

// Funzione collegata ai bottoni
function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function () {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById('risposta').innerHTML =
        'A ' + city + ' ci sono ' + dataObject.main.temp + ' gradi';
    } else {
      document.getElementById('risposta').innerText = 'Errore';
    }
  };

  // Applico il metodo "open"
  request.open('GET', URL + city, true);
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
}
