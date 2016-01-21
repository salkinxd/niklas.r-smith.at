var second;
var tick = 0.1;
var tickErgebnis;


function secIsTick() {
    second = document.getElementById("input").value;
    if (second > 0) {
         tickErgebnis = second/tick;
         document.getElementById("equals").innerHTML = second + " Second(s) is/are " + tickErgebnis.toFixed(0) + " Ticks<br>" + Math.floor(tickErgebnis/4) + " Full Repeaters and " + (tickErgebnis%4).toFixed(0) + " Ticks";
       } else {
            document.getElementById("equals").innerHTML = "Write another number!"
       }
}