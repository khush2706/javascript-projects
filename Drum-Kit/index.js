const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");
const snare = new Audio("sounds/snare.mp3");
const crash = new Audio("sounds/crash.mp3");
const kickBass = new Audio("sounds/kick-bass.mp3");
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  //Detecting button press
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting keyboard press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

//Detecting touch
// document.addEventListener("touchstart", function(event) {
//   makeSound(event.key);
//
//   buttonAnimation(event.key);
// });

function makeSound(key) {

  switch (key) {
    case "w":
      // var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.currentTime = 0;
      tom1.play();
      break;

    case "a":
      // var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.currentTime = 0;
      tom2.play();
      break;

    case "s":
      // var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.currentTime = 0;
      tom3.play();
      break;

    case "d":
      // var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.currentTime = 0;
      tom4.play();
      break;

    case "j":
      // var snare = new Audio("sounds/snare.mp3");
      snare.currentTime = 0;
      snare.play();
      break;

    case "k":
      // var crash = new Audio("sounds/crash.mp3");
      crash.currentTime = 0;
      crash.play();
      break;

    case "l":
      // var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.currentTime = 0;
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

if (window.innerWidth < 992) {
  document.querySelector(".set").classList.add("row");
  for (var j = 0; j < (document.querySelectorAll(".tile").length) - 1; j++) {
    document.querySelectorAll(".tile")[j].classList.add("col-6");
  }

  for (var k = 0; j < document.querySelectorAll(".tile").length; k++) {
    document.querySelectorAll(".drum")[k].style.backgroundSize = "cover";
    document.querySelectorAll(".drum")[k].classList.add("hideText");
  }
};
