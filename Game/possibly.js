var boxes = 0;

function createBox(number) {
    boxes = boxes + number;
    document.getElementById("game-counter").innerHTML = boxes + " Boxes";
}

window.setInterval(function () {

}, 1000);
