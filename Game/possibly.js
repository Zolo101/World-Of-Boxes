/* document.getElementById("game-box-counter").innerHTML

box.quantity = box.quantity + box.ps;
    document.getElementById("game-box-counter").innerHTML = box.quantity;
    document.getElementById("game-box-counter-limit").innerHTML = box.ostorage; */
/*document.getElementById("button-makeabox").style.display = "none";*/

var stallhidden = true;


$(document).ready(function () {
    $(".stalls").css("display", "none");
    $(".cash").css("display", "none");
}); /* Jquery goes here */

var box = {
    type: "Resource",
    total: 0,
    quantity: 0,
    perclick: 1,
    persecond: 0
};

var compressedbox = {
    type: "Resource",
    total: 0,
    quantity: 0,
    persecond: 0
};

var stall = {
    type: "Machine",
    total: 0,
    quantity: 0,
    cost: 9,
    makespersecond: 0,
    persecond: 0,
};

function makeabox() {
    box.quantity = box.quantity + box.perclick;
    box.total = box.total + box.perclick;
    document.getElementById("boxes").innerHTML = box.quantity;
};

function compressbox() {
    if (box.quantity >= 9) {
        box.quantity = box.quantity - 9;
        compressedbox.quantity = compressedbox.quantity + 1;
        document.getElementById("boxes").innerHTML = box.quantity;
        document.getElementById("compressed-boxes").innerHTML = compressedbox.quantity;
        if (compressedbox.total === 10) {
            $(".stalls").css("display", "block");
        };
    };
};

function makeascrewdriver() {
    if (compressedbox.quantity >= 4) {
        compressedbox.quantity = compressedbox.quantity - 4;
    }
};

function stall() {
    if (compressedbox.quantity >= 9) {
        compressedbox.quantity = compressedbox.quantity - 9;
        stall.quantity = stall.quantity + 1;
        stall.cost = math.round(math.floor(10 * (1.01) ** stall.cost))
        document.getElementById("stall").innerHTML = stall.quantity
        document.getElementById("hover-stl").innerHTML = "Creates a Stall Using" + stall.cost + "Compressed Boxes."
    };
};

function tick() {
    document.getElementById("boxes").innerHTML = box.quantity;
};

window.setInterval(function () {
    tick();
}, 1000);
