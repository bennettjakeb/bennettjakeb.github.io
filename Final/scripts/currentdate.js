var d = new Date()
var days = new Array("Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ",
 "Thursday, ","Friday, ", "Saturday, ")
 var month= new Array( "January ", "February ", "March ", "April ", "May ", "June ",
 "July ", "August ", "September ", "October ", "November ", "December ")

 document.write(days[d.getDay()] + "")
 document.write(d.getDate() + " ")
 document.write(month[d.getMonth()] + "")
 document.write(d.getFullYear())