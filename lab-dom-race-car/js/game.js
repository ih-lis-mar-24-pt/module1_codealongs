class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById("game-end")
        this.player = new Player(this.gameScreen, 200, 500, 100, 150, "../images/car.png");
        this.heigth = 600;
        this.width = 500;
        this.obstacles = []
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.floor(1000/60)
    }

    start(){
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.heigth}px`

        //removing the start screen from the page
        this.startScreen.style.display = "none"
        //show the gameScreen
        this.gameScreen.style.display = "block"

        //start the loop
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency)
    }

    gameLoop(){
        console.log("gameLoop")
        this.update()

        if(this.gameIsOver){
            clearInterval(this.gameIntervalId)
        }
        
    }

    update(){
        this.player.move()
    }

}
