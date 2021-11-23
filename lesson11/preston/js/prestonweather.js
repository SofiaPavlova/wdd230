const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=83ffc56b941a18f3b18fad10caf6dd16';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentWeath = document.querySelector('#currently');
    currentWeath.textContent = jsObject.main.temp.toFixed(0);

    const currentTemp = document.querySelector('#current-temp');
    currentTemp.textContent = jsObject.main.temp_max.toFixed(0);

    const currentHum = document.querySelector('#humidity');
    currentHum.textContent = jsObject.main.humidity.toFixed(0);

    const currentWS = document.querySelector('#wind-speed');
    currentWS.textContent = jsObject.wind.speed.toFixed(0);

    var temp = parseInt(document.querySelector('#current-temp').textContent);
    var wSpeed = parseInt(document.querySelector('#wind-speed').textContent);
    var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

    console.log(temp, wSpeed, windChill);
    var windChill= Math.round(windChill);
    document.getElementById("windChill").innerHTML= windChill;


  });


const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=83ffc56b941a18f3b18fad10caf6dd16';
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

