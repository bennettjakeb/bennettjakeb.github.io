var section = document.querySelector('section')
var requestURL = "https://bennettjakeb.github.io/temple.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var templeData = request.response;
  showData(templeData);
}

function showData(jsonObj) {
  var places = jsonObj['temples'];
  
for (var i = 0; i < places.length; i++) {
    var myArticle = document.createElement('article');
    var myImg = document.createElement('img');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');
    var myPara7 = document.createElement('p');
    var myPara8 = document.createElement('p');
    var myList1 = document.createElement('ul');
    var myList2 = document.createElement('ul');
    var myList3 = document.createElement('ul');
    
    if (places[i].name == "Seattle Temple") {
      myImg.setAttribute('src', 'images/seattle.jpg');
      myImg.setAttribute('alt', 'Seattle Temple');
  } else if (places[i].name == "Washington DC Temple") {
      myImg.setAttribute('src', 'images/washington_dc.jpg');
      myImg.setAttribute('alt', 'Washington DC Temple');
  } else if (places[i].name == "Chicago Illinois Temple") {
      myImg.setAttribute('src','images/chicago.jpg');
      myImg.setAttribute('alt', 'Chicago Illinois Temple');
  } else if (places[i].name == "Salt Lake City Temple") {
      myImg.setAttribute('src','images/saltLake.jpg');
      myImg.setAttribute('alt', 'Salt Lake City Temple');

  } 
 
    myH2.textContent = places[i].name;
    myPara1.textContent = 'Address: ' + places[i].address;
    myPara2.textContent = 'Telephone: ' + places[i].telephone;
    myPara3.textContent = 'Email: ' + places[i].email;
    myPara4.textContent = 'Services: ';
    myPara5.textContent = 'History: ';
    myPara6.textContent = 'Ordinance Schedule: ' + places[i].ordinanceSchedule;
    myPara7.textContent = 'Temple Closure Schedule';
    

    var templeServices = places[i].services;
    for (var j = 0; j < templeServices.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = templeServices[j];
    myList1.appendChild(listItem);
}
    var templeHistory = places[i].history;
    for (var j = 0; j < templeHistory.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = templeHistory[j];
    myList2.appendChild(listItem);
}
    var templeClosureSchedule = places[i].templeClosureSchedule;
    for (var j = 0; j < templeClosureSchedule.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = templeClosureSchedule[j];
    myList3.appendChild(listItem);
}
    myArticle.appendChild(myImg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myList1);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myList2);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myList3);

    section.appendChild(myArticle);

}
}