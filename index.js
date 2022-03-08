// Import stylesheets
import './style.css';

const cityElems = Array.from(document.getElementsByClassName('città'));
console.log(cityElems.length);
const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
var calcola_media = document.getElementById("media");
calcola_media.onclick = () => {
  for(let elem of cityElems)  media += calc_avg(elem.innerHTML);
  media = media/cityElems.length;
};
function calc_avg(city){
  var request = new XMLHttpRequest();
  request.onload = function(){
      if request.get == 200{}
      else{
        window.alert("Errore!");
      }
  };
  request.open('GET', URL + city, true);
  request.send();
  return calcolo;
}