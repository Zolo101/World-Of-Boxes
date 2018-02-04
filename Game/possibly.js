var boxes = 0;
var upgrade1s = 0;

function createBox(number) {
    boxes = boxes + number;
    document.getElementById("game-counter").innerHTML = boxes + " Boxes";
}

function upgrade1() {
    var upgrade1cost = Math.floor(25 * Math.pow(1.1, upgrade1s)); // the cost
    if (boxes >= upgrade1cost) {
        upgrade1s = upgrade1s + 1;
        boxes = boxes - upgrade1cost;
        document.getElementById("game-upgrade-button1").innerHTML = "Productive Hands (" + upgrade1s + ")";
        document.getElementById("game-counter").innerHTML = boxes + " Boxes";
    }
    var upgrade1next = Math.floor(25 * Math.pow(1.1, upgrade1s));
    document.getElementById("game-upgrade-button1-cost").innerHTML = upgrade1next + " Boxes";
}

window.setInterval(function () {

}, 1000);
