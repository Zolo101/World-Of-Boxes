/* document.getElementById("game-box-counter").innerHTML

box.quantity = box.quantity + box.ps;
    document.getElementById("game-box-counter").innerHTML = box.quantity;
    document.getElementById("game-box-counter-limit").innerHTML = box.ostorage; */

var box = {
    type:"Resource",
    totalbox: 0,
    quantity: 0,
    perclick: 1,
    persecond: 0
}

function makeabox() {
    box.quantity = box.quantity + box.perclick;
    box.totalbox = box.totalbox + box.perclick;
    document.getElementById("boxes").innerHTML = box.quantity
}

function tick() {
    if (box.totalbox >= 10) {

    }
}


window.setInterval(function () {
    tick();
}, 1000);
