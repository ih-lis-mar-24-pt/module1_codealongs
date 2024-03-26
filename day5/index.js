//Arrays

const myArray = []

//arrays count as a truthy value even if empty
//if(myArray) console.log("it's true")

const namesArray = ["André", "Karina", "Xico"]

const mixedArray = [false, "José", 12, ["Hello"], {}]

/* console.log(namesArray[2])
console.log(namesArray.length)
 */
/* for (let i = 0; i < namesArray.length; i++){
  console.log(namesArray[i])
} */

// Array methods

// push - adds to the end of the array
namesArray.push("Diogo")

//unshift - adds to the beginning
namesArray.unshift("Rita")

// pop - removes the last item (and returns it)
 let removedLast = namesArray.pop()
 //console.log("pop return", removedLast)

 // shift - removes the first item (and returns it)
namesArray.shift()

// splice - removes x amount of elements
let removedNames = namesArray.splice(1)
//console.log("removed names", removedNames)

//console.log(namesArray)


// Create an array with 100 numbers (from 1 to 100), you cannot use the .push()
// [1, 2, 3, 4 ..... , 100]

let newArray = []

for (let i = 100; i > 1; i--){
  newArray.unshift(i)
  // [100]
  // [99, 100]
  // [98, 99, 100]
}

//console.log(newArray)

const longString = "How much wood, would a woodchuck chuck if a woodchuck could chuck wood?"


//const splitString = longString.split(" ")
//const splitString = longString.split("wood")
const splitString = longString.split("", 5)

//regex

//console.log(splitString)

// Functions
// DRY - Don't repeat yourself
// KISS - Keep it simple stupid

/* 
function declaration

function functionName(parameters){
 // Logic here
  return something
}
 */

// Parameters

function sayHello(name){
  console.log(`Hello ${name}`)
}

const daniela = "Daniela"
/* sayHello(daniela)
sayHello("Sushil")
sayHello("Magda")
sayHello("Eva")
sayHello("Carolina") */

function meetAndGreet(name1, name2){
// checking if the function has arguments
/*   if(!name1 && !name2) console.log("Error, no names")
return; */

  console.log(`Hello ${name1}, meet ${name2}`)
}

//function invocation/execution
//meetAndGreet("Diogo", "José")

// a function always returns something

let returnOfTheFunction = meetAndGreet("Débora", "Rita")

//console.log(returnOfTheFunction)

function sum(a, b){
  //console.log(a + b)
  return a + b
}



/* const myCalculation = sum(2098, 1213)

console.log(myCalculation) */

function signupUser(firstName, lastName, job, location) {
  // return everything to save it on the db
/*   const userObject = {
    firstName, 
    lastName, 
    job, 
    location
  } */
  return {
    firstName, 
    lastName, 
    job, 
    location
  }
}

const userInfo = signupUser("Michael", "Scott", "Regional manager", "Scranton")

//console.log(userInfo)

function catchEm(poke1, poke2, poke3){

  return [poke1, poke2, poke3]
}

const classDex = catchEm("Bulbasaur", "Psyduck", "Rattata")

console.log(classDex)

// forEach

/* for (let i = 0; i < classDex.length; i++){

  console.log(classDex[i])
}
 */


// for the callback inside the forEach the first parameter is always the value, and the second the index of that value
classDex.forEach(function (pokemon, idx){
  console.log(idx , pokemon)
}) 

//console.log(classDex)

//classDex.forEach((pokemon) => console.log(pokemon))

// Reusable
// Abstraction
// Single responsibility
// Separation of concerns