// const Parts = {
    
// }

function changeHead() {
    robotHead.setAttribute("src", "/resources/robot_head" + event.target.value + ".png");
}

function changeBody() {
    robotBody.setAttribute("src", "/resources/robot_body" + event.target.value + ".png");
}

function changeLeg() {
    robotLeg.setAttribute("src", "/resources/robot_leg" + event.target.value + ".png");
}

// function addPart() {
//     robotPart.setAttribute("src" "https://w7.pngwing.com/pngs/614/706/png-transparent-futuristic-robot-battle-android-robot-head-material-electronics-photography-computer-thumbnail.png" + event.target.value )
// }
function changeWeapon(pic) {
    var weapon = document.getElementById("weapon");
    weapon.src = pic.value;
}
function changeCompanion(pic) {
    var companion = document.getElementById("companion");
    companion.src = pic.value;

}




