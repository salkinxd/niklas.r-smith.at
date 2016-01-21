var second = 0;
var tick = 0.1;

var s;

var repeater;
var repeaterNoDec = repeater.toFixed(0);
var restRepeater;
var restRepeaterNoDec = restRepeater.toFixed(0);

function secIsTick() {
    s = document.getElementById("input").value;
    console.log(Date());
    if(s > second) {
        console.log(s);
        document.getElementById("equals").innerHTML = s + " Second(s) is/are " + s*10 + " Ticks";
        repeater = ((s/10)/4);
        restRepeater = rep-repNoDec*(-1);
        document.getElementById("redstone").innerHTML ="<strong>" + repeaterNoDec + "</strong> Full Repeater(s) and 1 Repeater with <strong>" + restRepeaterNoDec + "</strong> tick(s)";
    } else {
        document.getElementById("equals").innerHTML = "Write another number!"
    }
}
function onload() {
    document.getElementById("input").defaultValue = 1;
} 