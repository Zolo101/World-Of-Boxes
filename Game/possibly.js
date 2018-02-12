var box = {
    "name": "Box",
    "desc": "The thing your trying to get loads of.",
    "ostorage": 50,
    "rarity": "common",
    "startvis": true,
    "quantity": 0,
    "bps": 0,
}

var steel = {
    "name": "Steel",
    "desc": "The compressed product of tons of boxes. Can be used to create machines.",
    "ostorage": 10,
    "rarity": "uncommon",
    "startvis": false,
    "quantity": 0,
    "bps": 0,
}

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

function constructbox() {

    if (box.quantity < box.ostorage) {
        box.quantity++;
    }

    document.getElementById("game-box-counter").innerHTML = box.quantity;
    document.getElementById("game-box-counter-limit").innerHTML = box.ostorage;
}

function compressbox(Number) {
    if (box.quantity >= 10 * Number && steel.quantity <= 9) {
        box.quantity = box.quantity - 10 * Number;
        steel.quantity = steel.quantity + 1 * Number;
        document.getElementById("game-box-counter").innerHTML = box.quantity;
        document.getElementById("game-steel-counter").innerHTML = steel.quantity;
    }
}

function constructbps() {
    box.quantity = box.quantity + box.bps;
    document.getElementById("game-box-counter").innerHTML = box.quantity;
    document.getElementById("game-box-counter-limit").innerHTML = box.ostorage;
}



window.setInterval(function () {
    constructbps();
}, 1000);
