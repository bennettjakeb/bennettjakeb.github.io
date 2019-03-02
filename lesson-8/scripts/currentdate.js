/*var day = new Date();
var days = 
["Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ",
 "Friday, ", "Saturday, "];
document.getElementById("").innerHTML = 
days[day.getDay()];

//"saturday"


var dd = new Date();
document.getElementById("").innerHTML =
dd.getDate();


//number, aka "16"



var n = new Date();
var months = 
["January ", "February ", "March ", "April ", "May ", "June ",
 "July ", "August ", "September ", "October ", "November ", "December "];
document.getElementById("").innerHTML =
months[n.getMonth()];

//month, aka "Feburary"


var d = new Date();
document.getElementById("demo").innerHTML = 
d.getFullYear();

//year, aka "2019"*/



var d = new Date()
var days = new Array("Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ",
 "Thursday, ","Friday, ", "Saturday, ")
 var month= new Array( "January ", "February ", "March ", "April ", "May ", "June ",
 "July ", "August ", "September ", "October ", "November ", "December ")

 document.write(days[d.getDay()] + "")
 document.write(d.getDate() + " ")
 document.write(month[d.getMonth()] + "")
 document.write(d.getFullYear())





