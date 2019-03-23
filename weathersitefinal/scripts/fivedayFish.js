var forcast  = new XMLHttpRequest();
forcast.open('GET','//api.openweathermap.org/data/2.5/forecast?id=5603240&appid=bc867b22ec7fc59aa9b901b6ef54bd32&units=imperial',true);

forcast.send();

forcast.onload = function() {
    var forcastInfo = JSON.parse(forcast.responseText);
    console.log(forcastInfo);


    document.getElementById('description1f').innerHTML = forcastInfo.list[5].weather["0"].description;
    document.getElementById('description2f').innerHTML = forcastInfo.list[13].weather["0"].description;
    document.getElementById('description3f').innerHTML = forcastInfo.list[21].weather["0"].description;
    document.getElementById('description4f').innerHTML = forcastInfo.list[29].weather["0"].description;
    document.getElementById('description5f').innerHTML = forcastInfo.list[37].weather["0"].description;



    document.getElementById('low1f').innerHTML = forcastInfo.list[5].main.temp_min;
    document.getElementById('low2f').innerHTML = forcastInfo.list[13].main.temp_min;
    document.getElementById('low3f').innerHTML = forcastInfo.list[21].main.temp_min;
    document.getElementById('low4f').innerHTML = forcastInfo.list[29].main.temp_min;
    document.getElementById('low5f').innerHTML = forcastInfo.list[37].main.temp_min;

    document.getElementById('high1f').innerHTML = forcastInfo.list[5].main.temp_max;
    document.getElementById('high2f').innerHTML = forcastInfo.list[13].main.temp_max;
    document.getElementById('high3f').innerHTML = forcastInfo.list[21].main.temp_max;
    document.getElementById('high4f').innerHTML = forcastInfo.list[29].main.temp_max;
    document.getElementById('high5f').innerHTML = forcastInfo.list[37].main.temp_max;

    document.getElementById('wind1f').innerHTML = forcastInfo.list[5].wind.speed;
    document.getElementById('wind2f').innerHTML = forcastInfo.list[13].wind.speed;
    document.getElementById('wind3f').innerHTML = forcastInfo.list[21].wind.speed;
    document.getElementById('wind4f').innerHTML = forcastInfo.list[29].wind.speed;
    document.getElementById('wind5f').innerHTML = forcastInfo.list[37].wind.speed;
} // end of the function