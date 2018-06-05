/* document.getElementById("game-box-counter").innerHTML

box.quantity = box.quantity + box.ps;
    document.getElementById("game-box-counter").innerHTML = box.quantity;
    document.getElementById("game-box-counter-limit").innerHTML = box.ostorage; */
/*document.getElementById("button-makeabox").style.display = "none";*/

var box = {
    type: "Resource",
    totalbox: 0,
    quantity: 0,
    perclick: 1,
    persecond: 0
};

var compressedbox = {
    type: "Resource",
    totalbox: 0,
    quantity: 0,
    persecond: 0
};

function makeabox() {
    box.quantity = box.quantity + box.perclick;
    box.totalbox = box.totalbox + box.perclick;
    document.getElementById("boxes").innerHTML = box.quantity;
}

function compressbox() {
    if (box.quantity >= 9) {
        box.quantity = box.quantity - 9;
        compressedbox.quantity = compressedbox.quantity + 1;
        document.getElementById("boxes").innerHTML = box.quantity;
        document.getElementById("compressed-boxes").innerHTML = compressedbox.quantity
        if (compressedbox.totalbox = 15 || compressedbox.quantity = 10) {
            document.getElementById("compressed-boxes").style.display = "inline";
        }
    }
}

function makeascrewdriver() {
    if (compressedbox.quantity >= 4) {
        compressedbox.quantity = compressedbox.quantity - 4;

    }
}

function tick() {
    document.getElementById("boxes").innerHTML = box.quantity;
}


window.setInterval(function () {
    tick();
}, 1000);
