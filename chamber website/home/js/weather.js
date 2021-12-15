//Menu
function toggleMenu() {
document.getElementById("primaryNav").classList.toggle("hide");
}
// Alerts 
const alertApiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=55.751244&lon=37.618423&units=metric&exclude=minutely,hourly&appid=83ffc56b941a18f3b18fad10caf6dd16';
fetch(alertApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const weathAlert = document.querySelector('#alert-banner');
    weathAlert.textContent = jsObject.alerts[1].description;
  });

var banner = document.getElementById("myBanner");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  banner.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == banner) {
    banner.style.display = "none";
  }
}


// Weather Summary
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=55.751244&lon=37.618423&units=metric&exclude=minutely,hourly&appid=83ffc56b941a18f3b18fad10caf6dd16';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentWeath = document.querySelector('#currently');
    currentWeath.textContent = jsObject.current.weather[0].description;

    const currentTemp = document.querySelector('#current-temp');
    currentTemp.textContent = jsObject.current.temp.toFixed(0);

    const currentHum = document.querySelector('#humidity');
    currentHum.textContent = jsObject.current.humidity.toFixed(0);

    var temp = parseInt(document.querySelector('#current-temp').textContent);
  });
// 3 Day Forcast

const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=55.751244&lon=37.618423&units=metric&APPID=83ffc56b941a18f3b18fad10caf6dd16';
fetch(forecastapiURL)
  .then(response => response.json())
  .then(jsObject => {
      console.log(jsObject);

      const noon= jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      console.log(noon);

      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let day = 0;
      noon.forEach(forecast => {
          let thedate = new Date(forecast.dt_txt);
          document.querySelector(`#dayofweek${day + 1}`).textContent = weekdays[thedate.getDay()];
          document.querySelector(`#forecast${day + 1}`).textContent = forecast.main.temp.toFixed(0);
          day++;
      
      const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      const desc = forecast.weather[0].description; 
      document.querySelector(`#icon${day}`).setAttribute('src', imagesrc);
      document.querySelector(`#icon${day}`).setAttribute('alt', desc);
    })
  })
  // Last modified
  if (Date.parse(document.lastModified) != 0)
  document.getElementById("timePassed").innerHTML=document.lastModified;  

  // Events
  var jsonEvent = 'events.json';
    fetch(jsonEvent)
    .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const company = jsonObject['events'];
    company.forEach((company) => {

    let card = document.createElement('section');

    let date = document.createElement ('h3');
    date.innerHTML=`${company.date}`;
    card.appendChild(date);

    let event = document.createElement ('p');
    event.innerHTML=`${company.event}`;
    card.appendChild(event);
    
    let time = document.createElement ('p');
    time.innerHTML=` ⏰ ${company.time}`;
    card.appendChild(time);

    let location = document.createElement ('p');
    location.innerHTML=`📍 ${company.location}`;
    card.appendChild(location);


    document.querySelector('section.events').appendChild(card);
  });
  })