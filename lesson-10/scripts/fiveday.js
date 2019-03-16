var forcast  = new XMLHttpRequest();
forcast.open('GET','//api.openweathermap.org/data/2.5/forecast?id=5061036&appid=bc867b22ec7fc59aa9b901b6ef54bd32&units=imperial',true);

forcast.send();

forcast.onload = function() {
    var forcastInfo = JSON.parse(forcast.responseText);
    console.log(forcastInfo);


    document.getElementById('description1').innerHTML = forcastInfo.list[4].weather["0"].description;
    document.getElementById('description2').innerHTML = forcastInfo.list[12].weather["0"].description;
    document.getElementById('description3').innerHTML = forcastInfo.list[20].weather["0"].description;
    document.getElementById('description4').innerHTML = forcastInfo.list[28].weather["0"].description;
    document.getElementById('description5').innerHTML = forcastInfo.list[36].weather["0"].description;



    document.getElementById('low1').innerHTML = forcastInfo.list[4].main.temp_min;
    document.getElementById('low2').innerHTML = forcastInfo.list[12].main.temp_min;
    document.getElementById('low3').innerHTML = forcastInfo.list[20].main.temp_min;
    document.getElementById('low4').innerHTML = forcastInfo.list[28].main.temp_min;
    document.getElementById('low5').innerHTML = forcastInfo.list[36].main.temp_min;

    document.getElementById('high1').innerHTML = forcastInfo.list[4].main.temp_max;
    document.getElementById('high2').innerHTML = forcastInfo.list[12].main.temp_max;
    document.getElementById('high3').innerHTML = forcastInfo.list[20].main.temp_max;
    document.getElementById('high4').innerHTML = forcastInfo.list[28].main.temp_max;
    document.getElementById('high5').innerHTML = forcastInfo.list[36].main.temp_max;

    document.getElementById('wind1').innerHTML = forcastInfo.list[4].wind.speed;
    document.getElementById('wind2').innerHTML = forcastInfo.list[12].wind.speed;
    document.getElementById('wind3').innerHTML = forcastInfo.list[20].wind.speed;
    document.getElementById('wind4').innerHTML = forcastInfo.list[28].wind.speed;
    document.getElementById('wind5').innerHTML = forcastInfo.list[36].wind.speed;
} // end of the function