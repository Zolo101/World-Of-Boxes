var boxes = 0;
var bpc = 1;
var bps = 0;

var productivehands = {
    "name": "Productive Hands",
    "desc": "Your manual box <br>making goes up by 1",
    "quantity": 0,
    "cost": 25,
    "costnext": 1.1,
    "visible": true
};

var machine200 = {
    "name": "Cardboard Machine 200",
    "desc": "A Small but Steady <br>3d printer you found at the local store. <br><br>You get 1 box per second.",
    "cost": 25,
    "costnext": 1.1,
    "visible": true
};

var machine580 = {
    "name": "Cardboard Machine 580",
    "desc": "An Advanced <br>3d printer with an <br> cool new B3force BT 320 chip. <br><br>You get 4 boxes per second.",
    "cost": 25,
    "costnext": 1.1,
    "visible": false
};


function createBox() {
    boxes = boxes + bpc;
    document.getElementById("game-counter").innerHTML = boxes;
}

function createbps() {
    boxes = boxes + bps;
    document.getElementById("game-counter").innerHTML = boxes;
}

function upgrade1() {
    var upgrade1cost = Math.floor(25 * Math.pow(1.1, upgrade1s)); // the cost
    if (boxes >= upgrade1cost) {
        upgrade1s = upgrade1s + 1;
        bpc = bpc + 1;
        boxes = boxes - upgrade1cost;
        document.getElementById("game-upgrade-button1").innerHTML = "Productive Hands (" + upgrade1s + ')<p id="game-main-button-desc"> + Your manual box <br>making goes up by 1</p><p id="game-upgrade-button1-cost">25 Boxes</p>';
        document.getElementById("game-counter").innerHTML = boxes;
    }
    var upgrade1next = Math.floor(25 * Math.pow(1.1, upgrade1s));
    document.getElementById("game-upgrade-button1-cost").innerHTML = "Cost: " + upgrade1next + " Boxes";
}

window.setInterval(function () {
    createbps();
    document.getElementById("game-bps").innerHTML = bps + "/s";
}, 1000);
