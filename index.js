// Import stylesheets
import './style.css';

const cityElems = Array.from(document.getElementsByClassName('città'));
const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}
var chiediMedia = document.getElementById("media");
chiediMedia.onclick = () => document.getElementById("risposta_media").innerText = calcolaMedia();
function calcolaMedia(){
  return 0;
}
// Funzione collegata ai bottoni
function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function () {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      console.log(dataObject);
      document.getElementById('risposta').innerHTML =
        'A ' + city + ' ci sono ' + dataObject.main.temp + ' gradi e ' + dataObject.main.pressure + " mb (pressione)";
    } else {
      document.getElementById('risposta').innerText = 'Errore';
    }
  };

  // Applico il metodo "open"
  request.open('GET', URL + city, true);
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
}
