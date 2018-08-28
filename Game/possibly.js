$(document).ready(function () {
    $("#lava-text").hide();
    $("#stone").hide();
    $("#button-stall").hide();

    /*$("#button-hammer").hide();$("#button-smelter").hide();$("#button-levelupstall").hide();$("#button-eaten").hide();*/

    $("#button-makeascrewdriver").hide();$("#button-hammer").hide();

    $("#smelter").hide();

    $("#b-barrier").hide();$("#u-barrier").hide();$("#s-barrier").hide();$("#sm-barrier").hide();

    $("#stall").hide();

    $("#settings").hide();

    /* Building and Upgrades div closing function */
    $("#b-barrier").click(function (event) {
        if ($("#buildings").is(":visible")) {
            $("#b-barrier").text("Buildings (show)");
            $("#buildings").hide();
        } else {
            $("#b-barrier").text("Buildings");
            $("#buildings").show();
        }
    });

    $("#u-barrier").click(function (event) {
        if ($("#upgrades").is(":visible")) {
            $("#u-barrier").text("Upgrades (show)");
            $("#upgrades").hide();
        } else {
            $("#u-barrier").text("Upgrades");
            $("#upgrades").show();
        }
    });

    $("#s-barrier").click(function (event) {
        if ($("#stall").is(":visible")) {
            $("#s-barrier").text("Stall (show)");
            $("#stall").hide();
        } else {
            $("#s-barrier").text("Stall");
            $("#stall").show();
        }
    });

    $("#sm-barrier").click(function (event) {
        if ($("#smelter").is(":visible")) {
            $("#sm-barrier").text("Smelter (show)");
            $("#smelter").hide();
        } else {
            $("#sm-barrier").text("Smelter");
            $("#smelter").show();
        }
    });
    
    console.log("Everything's ready. Starting the game.");
    tick();
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
    persecond: 0,
    cost: 9
};

var screwdriver = {
    type: "Building",
    total: 0,
    clickmakes: 0, /* How much more box adds this building gives you when clicking "Make a Box" */
    cost: 4
};

var hammer = {
    type: "Building",
    total: 0,
    quantity: 0,
    cost: 10
};

var smelter = {
    type: "Expansion",
    unlocked: "false",
    cost: 50
};

var stall = {
    type: "Expansion",
    unlocked: "false",
    cost: 9,
    level: 1,
    levelupcost: 40
};

var lava = {
    quantity: 0,
    cap: 1000
};

function buttonopacity(Element, QuantityName, CostName) {
    if (QuantityName.quantity < CostName.cost) {
        $(Element).removeClass("buy").addClass("nobuy");
    } else {
        $(Element).removeClass("nobuy").addClass("buy");
    }
}

function tick() {
    buttonopacity("#button-compressbox",box,compressedbox);
    buttonopacity("#button-stall",compressedbox,stall);
    buttonopacity("#button-makeascrewdriver",compressedbox,screwdriver);
    buttonopacity("#button-levelupstall",compressedbox,stall.levelupcost);
    buttonopacity("#button-hammer",compressedbox,hammer);
    if (compressedbox.quantity < smelter.cost && hammer.quantity >= 1) {
        $("#button-smelter").removeClass("buy").addClass("nobuy");
    } else {
        $("#button-smelter").removeClass("nobuy").addClass("buy");
    }

    document.getElementById("boxes").innerHTML = box.quantity;
    document.getElementById("compressed-boxes").innerHTML = compressedbox.quantity;

    if ($("#button-makeascrewdriver").is(":visible")) {
        $("#b-barrier").show();
    }

    if ($("#button-stall").is(":visible")) {
        $("#u-barrier").show();
    }

    if ($("#button-levelupstall").is(":visible")) {
        $("#s-barrier").show();
    }

    if ($("#button-addlava").is(":visible")) {
        $("#sm-barrier").show();
    }
}

window.setInterval(function () {
    if (box.persecond >= 1) {
        box.quantity = box.quantity + box.persecond;
        box.total = box.total + box.persecond;
        document.getElementById("boxes").innerHTML = box.quantity;
    }
    tick();
}, 1000);

function debug() {
    box.quantity = Infinity;
    compressedbox.quantity = Infinity;
    tick();
}

function settings () {
    if ($("#settings").is(":visible")) {
        $("#settings").slideUp();
    } else {
        $("#settings").slideDown();
    }
}

function makeabox() {
    box.quantity = box.quantity + box.perclick;
    box.total = box.total + box.perclick;
    document.getElementById("boxes").innerHTML = box.quantity;
    tick();
}

function compressbox() {
    if (box.quantity >= compressedbox.cost) {
        box.quantity = box.quantity - compressedbox.cost;
        compressedbox.quantity = compressedbox.quantity + 1;
        document.getElementById("boxes").innerHTML = box.quantity;
        document.getElementById("compressed-boxes").innerHTML = compressedbox.quantity;
        if (stall.unlocked == "false") {
            $("#button-stall").css("display", "block");
        }
        $("#button-makeascrewdriver").css("display", "block");
    }
    tick();
}

function makescrewdriver() {
    if (compressedbox.quantity >= screwdriver.cost) {
        compressedbox.quantity = compressedbox.quantity - screwdriver.cost;
        screwdriver.total++;
        screwdriver.clickmakes++;
        screwdriver.cost = 4 + (screwdriver.total + 2) ** 2
        document.getElementById("button-makeascrewdriver").innerHTML = "Make a Screwdriver " + "(" + screwdriver.total + ")";
        box.perclick = box.perclick + 1; /* Change this when you add a screwdriver upgrade */
        document.getElementById("hover-masd").innerHTML = "<b>Creates a Screwdriver using " + screwdriver.cost + " Compressed Boxes.</b><br>Every Building of this you own adds <b>1 extra box</b> when you click >Make a Box<<br>Although this can change with upgrades</p";
    }
    tick();
}

function makehammer() {
    if (compressedbox.quantity >= hammer.cost) {
        compressedbox.quantity = compressedbox.quantity - hammer.cost;
        hammer.quantity++;
        box.persecond++;
        if (stall.level == 1) {
            hammer.cost = 4 + (hammer.quantity + 2) ** 2
        } else {
            hammer.cost = 4 + (hammer.quantity + 2) ** 2 / ((stall.level - 1) / 2 / 100);
        }
        document.getElementById("button-hammer").innerHTML = "Make a Hammer " + "(" + hammer.quantity + ", " + box.persecond + " boxes/s)";
        document.getElementById("hover-mah").innerHTML = "<b>Makes a Hammer using " + hammer.cost + " Compressed Boxes.</b> <br>The Hammer makes boxes every second, although <br>this can change with upgrades.";
    }
    tick();
}

function upgradestall() {
    if (compressedbox.quantity >= stall.cost) {
        compressedbox.quantity = compressedbox.quantity - stall.cost;
        stall.unlocked = "true";
        $("#stall").css("display", "block");
        $("#button-hammer").css("display", "block");
        $("#button-stall").hide();
    }
    tick();
}

function levelupstall() {
    if (compressedbox.quantity >= levelupstall.cost && stall.level <= 99) {
        compressedbox.quantity = compressedbox.quantity - stall.levelupcost;
        stall.level++;
        stall.levelupcost = 40 + (stall.level + 2) ** 4;
        document.getElementById("button-levelupstall").innerHTML = "Level Up Stall [" + stall.level + "/100]"
        document.getElementById("hover-lus").innerHTML = "<b>This costs " + stall.levelupcost + " Compressed boxes.</b><br>Every <b>stall</b> Level reduces the stall's items by <b>0.6%</b>"/*<br><br>At Level 10, 2 new items will be unlocked."*/;
    }
    tick();
}

function upgradesmelter() {
    if (compressedbox.quantity >= smelter.cost && hammer.quantity >= 1) {
        compressedbox.quantity = compressedbox.quantity - smelter.cost;
        $("#smelter").css("display", "block");
        $("#button-addlava").css("display", "block");
        $("#lava").css("display", "block");
        $("#lava-text").css("display", "inline");
    }
    tick();
}

function addlava(howmuch) {
    if (box.quantity >= howmuch && lava.quantity >= lava.cap - howmuch) {
        box.quantity = box.quantity - howmuch*2;
        lava.quantity = lava.quantity + howmuch;
        document.getElementById("lava").innerHTML = "Lava: " + lava.quantity + " / " + lava.cap + "ml";
    }
    tick();
}

/* SAVING & LOADING */

function save() {
    localStorage.setItem("box",box.quantity);
    localStorage.setItem("boxtotal",box.total);
    localStorage.setItem("boxperclick",box.perclick);
    localStorage.setItem("boxpersecond",box.persecond);
    localStorage.setItem("compressedbox",compressedbox.quantity);
    localStorage.setItem("compressedboxtotal",compressedbox.total);

    localStorage.setItem("stallunlocked",stall.unlocked);
    localStorage.setItem("screwdriver",screwdriver.total);
    localStorage.setItem("hammer",hammer.total);
    console.log("Game saved.");
}

function load() {
    document.getElementById("boxes").innerHTML = localStorage.getItem("box");
    box.quantity = Number(localStorage.getItem("box"));
    box.total = Number(localStorage.getItem("boxtotal"));
    box.perclick = Number(localStorage.getItem("boxperclick"));
    box.persecond = Number(localStorage.getItem("boxpersecond"));
    document.getElementById("compressed-boxes").innerHTML = localStorage.getItem("compressedbox");
    compressedbox.quantity = Number(localStorage.getItem("compressedbox"));
    compressedbox.total = Number(localStorage.getItem("compressedboxtotal"));
    stall.unlocked = localStorage.getItem("stallunlocked");
    screwdriver.quantity = Number(localStorage.getItem("screwdriver"));
    hammer.quantity = Number(localStorage.getItem("hammer"));
    console.log("Game loaded.");
}