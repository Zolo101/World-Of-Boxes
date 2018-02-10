var boxes = 0;
var bpc = 1;
var bps = 0;
var upgrade1s = 0;
var building1s = 0;
var building2s = 0;

function createBox() {
    boxes = boxes + bpc;
    document.getElementById("game-counter").innerHTML = boxes + " Boxes";
}

function createbps() {
    boxes = boxes + bps;
    document.getElementById("game-counter").innerHTML = boxes + " Boxes";
}

function upgrade1() {
    var upgrade1cost = Math.floor(25 * Math.pow(1.1, upgrade1s)); // the cost
    if (boxes >= upgrade1cost) {
        upgrade1s = upgrade1s + 1;
        bpc = bpc + 1;
        boxes = boxes - upgrade1cost;
        document.getElementById("game-upgrade-button1").innerHTML = "Productive Hands (" + upgrade1s + ')<p id="game-main-button-desc">Your manual box <br>making goes up by 1</p><p id="game-upgrade-button1-cost">25 Boxes</p>';
        document.getElementById("game-counter").innerHTML = boxes + " Boxes";
    }
    var upgrade1next = Math.floor(25 * Math.pow(1.1, upgrade1s));
    document.getElementById("game-upgrade-button1-cost").innerHTML = "Cost: " + upgrade1next + " Boxes";
}

function building1() {
    var building1cost = Math.floor(80 * Math.pow(1.1, building1s)); // the cost
    if (boxes >= building1cost) {
        building1s = building1s + 1;
        bps = bps + 1;
        boxes = boxes - building1cost;
        document.getElementById("game-building-button1").innerHTML = "3D Cardboard Printer 200 (" + building1s + ')<p id="game-main-button1-desc">A Small but Steady <br>3d printer you found at the local store. <br><br>You get 1 box per second.</p><p id="game-upgrade-button1-cost">Cost: 80 Boxes</p>';
        document.getElementById("game-counter").innerHTML = boxes + " Boxes";
    }
    var building1next = Math.floor(80 * Math.pow(1.1, building1s));
    document.getElementById("game-building-button1-cost").innerHTML = "Cost: " + building1next + " Boxes";
}

function building2() {
    var building2cost = Math.floor(400 * Math.pow(1.1, building2s)); // the cost
    if (boxes >= building2cost) {
        building2s = building2s + 1;
        bps = bps + 4;
        boxes = boxes - building2cost;
        document.getElementById("game-building-button2").innerHTML = "3D Cardboard Printer 580 (" + building2s + ')<p id="game-main-button2-desc">An Advanced <br>3d printer with an <br> cool new B3force BT 320 chip. <br><br>You get 4 boxes per second.</p><p id="game-building-button2-cost">Cost: 400 Boxes</p>';
        document.getElementById("game-counter").innerHTML = boxes + " Boxes";
    }
    var building2next = Math.floor(400 * Math.pow(1.1, building2s));
    document.getElementById("game-building-button2-cost").innerHTML = "Cost: " + building2next + " Boxes";
}

window.setInterval(function () {
    createbps();
    document.getElementById("game-bps").innerHTML = bps + "/s";
}, 1000);
