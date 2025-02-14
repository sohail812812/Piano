
// Detecting Button Click
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonHTML = this.innerHTML; // Get the button text
    makeSound(buttonHTML); // Play the corresponding sound
    buttonAnimation(buttonHTML); // Add animation
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key); // Play sound for the pressed key
  buttonAnimation(event.key); // Add animation
});

// Function to Play Sound
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log("Invalid key:", key);
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed"); 
    setTimeout(function () {
      activeButton.classList.remove("pressed"); // Remove after 100ms
    }, 100);
  }
}
