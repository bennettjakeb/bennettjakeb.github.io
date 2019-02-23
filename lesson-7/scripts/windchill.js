// f = 35.74 + 0.6215t - 35.75 s^0.16 + 0.4275 t s ^0.16

// f = wind chill factor in Fahrenheit
// t = air Average temp in Fahrenheit = 48
// s = wind speed in miles per hour = 8
    
var f = (35.74+(0.6215*48))-(35.75*Math.pow(8,0.16))+(0.4275*(48*(Math.pow(8,0.16))))
var n = f.toFixed(0);

document.write(n + "°")
