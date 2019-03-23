var forcast  = new XMLHttpRequest();
forcast.open('GET','https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=bc867b22ec7fc59aa9b901b6ef54bd32&units=imperial',true);

forcast.send();

forcast.onload = function() {
    var forcastInfo = JSON.parse(forcast.responseText);
    console.log(forcastInfo);


    document.getElementById('description1s').innerHTML = forcastInfo.list[5].weather["0"].description;
    document.getElementById('description2s').innerHTML = forcastInfo.list[13].weather["0"].description;
    document.getElementById('description3s').innerHTML = forcastInfo.list[21].weather["0"].description;
    document.getElementById('description4s').innerHTML = forcastInfo.list[29].weather["0"].description;
    document.getElementById('description5s').innerHTML = forcastInfo.list[37].weather["0"].description;



    document.getElementById('low1s').innerHTML = forcastInfo.list[5].main.temp_min;
    document.getElementById('low2s').innerHTML = forcastInfo.list[13].main.temp_min;
    document.getElementById('low3s').innerHTML = forcastInfo.list[21].main.temp_min;
    document.getElementById('low4s').innerHTML = forcastInfo.list[29].main.temp_min;
    document.getElementById('low5s').innerHTML = forcastInfo.list[37].main.temp_min;

    document.getElementById('high1s').innerHTML = forcastInfo.list[5].main.temp_max;
    document.getElementById('high2s').innerHTML = forcastInfo.list[13].main.temp_max;
    document.getElementById('high3s').innerHTML = forcastInfo.list[21].main.temp_max;
    document.getElementById('high4s').innerHTML = forcastInfo.list[29].main.temp_max;
    document.getElementById('high5s').innerHTML = forcastInfo.list[37].main.temp_max;

    document.getElementById('wind1s').innerHTML = forcastInfo.list[5].wind.speed;
    document.getElementById('wind2s').innerHTML = forcastInfo.list[13].wind.speed;
    document.getElementById('wind3s').innerHTML = forcastInfo.list[21].wind.speed;
    document.getElementById('wind4s').innerHTML = forcastInfo.list[29].wind.speed;
    document.getElementById('wind5s').innerHTML = forcastInfo.list[37].wind.speed;
} // end of the function