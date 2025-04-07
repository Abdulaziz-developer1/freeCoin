const number = document.getElementById('number');
const click = document.getElementById('click');
const timesDisplay = document.getElementById('times');
let num = localStorage.getItem("num") ? Number(localStorage.getItem("num")) : 0;
let times = localStorage.getItem("times") ? Number(localStorage.getItem("times")) : 1;

function update() {
    number.innerHTML = num;
    timesDisplay.innerText = `Points per click: ${times}`;
    localStorage.setItem("num", num);
    localStorage.setItem("times", times);
}

function clicker() {
    num += times;
    update();
}

function boost1() {
    if (num >= 100) {
        times += 2;
        num -= 100;
        update();
    }
}

function boost2() {
    if (num >= 150) {
        times += 3;
        num -= 150;
        update();
    }
}

function boost3() {
    if (num >= 200) {
        times += 4;
        num -= 200;
        update();
    }
}

function max() {
    if (num >= 100) {
        let maxp = Math.floor(num / 100);
        times += maxp;
        num -= maxp * 100;
        update();
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu-content');
    const overlay = document.getElementById('overlay');

    if (menu.style.display === "block") {
        menu.style.display = "none";
        overlay.style.display = "none";
    } else {
        menu.style.display = "block";
        overlay.style.display = "block";
        overlay.style.pointerEvents = "none"; // Allows menu clicks
    }
}


function confirmDeleteProgress() {
    document.getElementById('delete-popup').style.display = "block";
    document.getElementById('overlay').style.display = "block";
}

function deleteProgress() {
    localStorage.clear();
    num = 0;
    times = 1;
    update();
    closePopup();
}

function showInstructions() {
    document.getElementById('instructions-popup').style.display = "flex";
    document.getElementById('instructions-popup').style.flexDirection = "column";
    document.getElementById('instructions-popup').style.gap = "10px";
    document.getElementById('overlay').style.display = "block";
}

function closePopup() {
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = "none");
    document.getElementById('overlay').style.display = "none";
}

update();
