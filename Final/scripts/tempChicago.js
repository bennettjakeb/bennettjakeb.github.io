var weatherObject  = new XMLHttpRequest();
weatherObject.open('GET','https://api.openweathermap.org/data/2.5/forecast?id=4887398&appid=bc867b22ec7fc59aa9b901b6ef54bd32&units=imperial',true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place3').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp3').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind3').innerHTML = weatherInfo.wind.speed;
    document.getElementById('humid3').innerHTML = weatherInfo.main.humidity;
    document.getElementById('currently3').innerHTML = weatherInfo.weather[0].description;

    var temp = parseFloat(document.getElementById('currentTemp3').innerHTML = weatherInfo.main.temp);
    var wind = parseFloat(document.getElementById('currentWind3').innerHTML = weatherInfo.wind.speed);
    var speed = Math.pow(wind,.16)
    var answer = (35.74 + (0.6215*temp)) - (35.75*speed) + (0.4275*temp*speed)

    document.getElementById("windChill").innerHTML = Math.round(answer);

} // end of the function
