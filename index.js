var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerText;
        makeSound(buttonInnerHTML);

    });
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
})



function makeSound(key) {
    
    
    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
    }

}
// ............color changer function...................

var a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
document.querySelector(".changer").addEventListener("click", changeColor);

function changeColor() {
    var hex = "#"
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * a.length)
        hex += a[randomNum];
        document.querySelector(".hexvalues").innerText = hex
        document.body.style.backgroundColor = hex;
    }
}