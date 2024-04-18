window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = null;

  startButton.addEventListener("click", function () {
    startGame();
  });

  //const imgsArray = [ "../images/car.png", "../images/redCar.png"]

  function startGame() {
    console.log("start game");
    game = new Game()

    game.start()
  }

 function handleKeyDown(event){
  const key = event.key;
  const possibleKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown"
  ]

  if(possibleKeys.includes(key)){
    // prevent default behavior
    event.preventDefault()

    switch(key){
      case "ArrowLeft":
        game.player.directionX  = -2;
        break;
      case "ArrowRight":
        game.player.directionX  = 2;
        break;
      case "ArrowDown":
        game.player.directionY  = 2;
        break;
      case "ArrowUp":
        game.player.directionY  = -2;
        break;
    }
  }
}

window.addEventListener('keydown', handleKeyDown)

window.addEventListener('keyup', () => {
  game.player.directionX = 0;
  game.player.directionY = 0;
} )


}
