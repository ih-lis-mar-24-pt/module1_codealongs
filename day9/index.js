// OOP - Object Oriented Programming 

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];


//let dice;

let player1 = {
  name: "Carolina",
  color: "Pink",
  position: 0,
  money: 1000,
  move(){
    let dice = Math.floor(1 + Math.random() * 6)
    this.position = (this.position + dice) % squares.length

    this.money += squares[this.position]

    if(this.money <= 0) {
     console.log(`${this.name} lost!`)
    }
  },

  displayInfo(){
    console.log(`${this.name} is in position ${this.position} and has ${this.money}`)
  }

}

let player2 = {
  name: "Sushil",
  color: "Green",
  position: 0,
  money: 1000,
  move(){
    let dice = Math.floor(1 + Math.random() * 6)
    this.position = (this.position + dice) % squares.length

    this.money += squares[this.position]

    if(this.money <= 0) {
     console.log(`${this.name} lost!`)
    }
  },

  displayInfo(){
    console.log(`${this.name} is in position ${this.position} and has ${this.money}`)
  }
}

let player3 = {
  name: "Gonçalo",
  color: "Blue",
  position: 0,
  money: 1000,
  move(){
    let dice = Math.floor(1 + Math.random() * 6)
    this.position = (this.position + dice) % squares.length

    this.money += squares[this.position]

    if(this.money <= 0) {
     console.log(`${this.name} lost!`)
    }
  },

  displayInfo(){
    console.log(`${this.name} is in position ${this.position} and has ${this.money}`)
  }
}

// Player 1's turn
// Roll the dice 
/* dice = Math.floor(1 + Math.random() * 6)

// Moving the player
player1.position = (player1.position + dice) % squares.length

//calculate the money
player1.money += squares[player1.position]

//check if the player lost
if(player1.money <= 0) {
  console.log(`${player1.name} lost!`)
}

// player2 turn
dice = Math.floor(1 + Math.random() * 6)
player2.position = (player2.position + dice) % squares.length
player2.money += squares[player2.position]
if(player2.money <= 0) {
  console.log(`${player2.name} lost!`)
}

// player3 turn
dice = Math.floor(1 + Math.random() * 6)
player3.position = (player3.position + dice) % squares.length
player3.money += squares[player3.position]
if(player3.money <= 0) {
  console.log(`${player3.name} lost!`)
}

console.log(player1)
console.log(player2)
console.log(player3) */

// Encapsulation
// Abstraction


// 1 turn

/* for (let i = 0; i < 100; i++){
  player1.move()
  player2.move()
  player3.move()
}

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()
 */


// create an object called playlist
// songs : []
// addToPlaylist - method that accepts 1 argument (a song) and add it to the songs array
// printPlaylist - method that just console.logs all of the songs
// Bonus: on the method above print a string with all the songs separated by a comma

const playlist = {
  songs: [],
  addToPlaylist(song){
    this.songs.push(song)
  },
  printPlaylist(){
    console.log(this.songs.join(", "))
  }
}

/* playlist.addToPlaylist("Abstract")
playlist.addToPlaylist("Hey ya")
playlist.addToPlaylist("Can't stop")

playlist.printPlaylist() */


// Class syntax

class Player {
  //class keyword followed by the name of the class
  //for the parameters we pass anything that might change between objects
  constructor(name, color){
    this.name = name;
    this.color = color;
    this.position = 0;
    this.money = 1000;
  }

  move(){
    let dice = Math.floor(1 + Math.random() * 6)
    this.position = (this.position + dice) % squares.length
    this.money += squares[this.position]
    if(this.money <= 0) {
     console.log(`${this.name} lost!`)
    }
  }

  displayInfo(){
    console.log(`${this.name} is in position ${this.position} and has ${this.money}`)
  }

}


/* 
what the constructor does behind the scenes
let playerExample = {}
playerExample.name = name;
playerExample.color = color;
playerExample.position = 0;
playerExample.money = 1000;
 */

/* const myArray = new Array()

 class Array {
  constructor(){
    //...
  }

  map(){

  }

  filter(){

  }
} */

/* const player4 = new Player("Daniela", "Purple")
const player5 = new Player("Magda", "Orange")
const player6 = new Player("Eva", "Black")


player4.move()
player5.move()
player6.move()

player4.displayInfo()
player5.displayInfo()
player6.displayInfo()
 */


// Inheritance

class Animal {
  constructor(name, color, sound){
    this.name = name;
    this.color = color;
    this.sound = sound;
    this.alive = true;
  }
  makeSound(){
    console.log(this.sound)
  }
}

class Cat extends Animal {
  constructor(name, color, sound, isAsleep){
    //super calls the constructor of the parent class
    super(name, color, sound);
    
    // for the properties exclusive to this class we still need to assign them
    this.isAsleep = isAsleep
  }

  changeState(){
   this.isAsleep = !this.isAsleep
  }
}

/* //new cat
const catExample = {}
// calls super and calls the parent class constructor
catExample.name = name;
catExample.color = color;
catExample.sound = sound;
catExample.isAlive = true;
//finish with  the rest of the constructor
catExample.isAsleep = isAsleep */

const tom = new Cat("Tom", "Grey", "Meow", false)
/* 
console.log(tom.isAsleep)

tom.changeState()

console.log(tom.isAsleep)

tom.makeSound()
 */

class Penguin extends Animal {
  constructor(name, fishCaught){
    super(name, "Black and white", "Excuse me")
    this.fishCaught = fishCaught
  }
}

const happy = new Penguin("Happy", 7)

// create a new class called Whale that extends Animal
// it has a property called stomach which is an empty array
// add a method called eat that accepts a value , adds it to the stomach and makes the whale sound

// create a new whale called Moby, with the color White

//  make the whale eat "Pequod" and "Ahab"

class Whale extends Animal {
  constructor(name, color, sound){
    super(name, color, sound)
    this.stomach = []
  }

  eat(food){
   this.stomach.push(food)
    this.makeSound()
  }

  // here we just change it for the whale, not all animals
  // polymorphism
  makeSound(){
    console.log(this.sound.toUpperCase())
  }
}

const moby = new Whale("Moby", "White", "Yum!")

 moby.eat("Pequod")
 moby.eat("Ahab")

 // Encapsulation
 // Abstraction
 // Inheritance
 // Polymorphism