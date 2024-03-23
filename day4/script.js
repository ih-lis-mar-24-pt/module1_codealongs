// {} []

let myName = "André"

//console.log(myName)

myName = "Ferreira"

//console.log(myName)

const planet = "Earth"

//planet = "Mercury"


//Primitive Values
// Strings
// Numbers
// Booleans
// undefined
// null
// Symbol

// Numbers

let age = 30;
let price = 29.99;

//console.log(typeof age)

let operation = "André" / 2
//console.log(typeof operation)

//Operators
// +
// -
// /
// *
// ** exponential
// % modulos/remainder

//assignment operators

//price = price + 10
// PEMDAS 
let maths = 10 + (10- 2) * 4
//console.log(maths)

price -= 10
//console.log(price)

// Strings

let firstName = "Jack"
let lastName = 'Bauer'

let message = "I'm going home"

// string concatenation

let hello = "Hello " +  firstName + " " + lastName + "!"

//console.log(hello)

// string interpolation

let interpolatedMessage = `Hello there ${firstName} ${lastName}! The price is ${price}`

//console.log(interpolatedMessage)

// methods - string manipulation

let myString = "To be or not to be."

//console.log(myString.charAt(3))

// bracket notation
//console.log(myString[3], myString[2])

// indexOf

//console.log(myString.indexOf("e"))
//console.log(myString.indexOf("be."))
//second argument is where to start searching
//console.log(myString.indexOf("be", 6))

//console.log(myString.lastIndexOf("be"))

let greeting = "Hello there, how are you?"


//console.log(greeting.substring(6, 11))
//console.log(greeting.slice(6, 11))
//substring accepts negative values
//console.log(greeting.slice(-3, -1))


const str = "To be or not to be, that is the question."


//startsWith - returns a boolean

//console.log(str.startsWith("not to be"))
//console.log(str.startsWith("not to be", 9))

//endsWith
//the number is the amount of indexes we consider for the search
//console.log(str.endsWith("question."))
//console.log(str.endsWith("not to be", 18))


//localeCompare - returns either -1, 0, 1
//console.log("age".localeCompare('bonus'))
//console.log("age".localeCompare('age'))
//console.log("bonus".localeCompare('age'))
//console.log("age".localeCompare('Age'))

let firstStudent = "Ana"
let secondStudent = "João"

//console.log(firstStudent.toLowerCase().localeCompare(secondStudent.toLowerCase()))
//console.log("2".localeCompare('10'))

//includes
//console.log(str.includes("to be."))
//console.log(str.includes("To", 3))

//repeat
//console.log("ah".repeat(5))
let lyrics = "alright "

//console.log(lyrics.repeat(7))

//boolean

let a = true;
let b = false;

//operators

//or - needs 1 true to return true
//console.log(true || true)
//console.log(true || false)

//short-circuit
//console.log(true || false || false || false || (10 < 1))

//and - needs everything to be true to return true
//console.log(true && true)
//console.log(true && false)
//console.log(false && false)

//short-circuit
//console.log(false && true && true && (10 > 2))

//not
/* console.log(!true)
console.log(!false)
console.log(!(10 > 1))

let loggedIn = true;

if(!loggedIn){
  console.log("No access")
}
 */

// undefined

let userInput = "Rua javascript"

let address = userInput || null

let myObj = {
  name: "Lucia",
  address: null
}

let user;
/* console.log(user)
console.log(myObj.age) */

//null
let password = null;
//console.log(password)


// Thruthy and Falsy

/* if (true && 10 && "false" && "-1000" && {} && []) {
  console.log("All of these are thruthy")
}


if(!(false && "" && 0 && null && undefined && NaN )){
  console.log("These are all falsy")
} */

// immutability
//all of javascripts primitive values are immutable

let campus = "Lisbon"
//console.log(campus[0])

campus[0] = "F"
//console.log(campus)

campus = "Fisbon"

let productPrice = 10
productPrice += 10


//Conditionals and loops

// if else
 

/* if(true ) {
  console.log("This is true")
}

if(greeting) {
  console.log("This is true")
}

if((10 > 1) && !(30 > 5)) {
  console.log("This is true")
}
 */

const newAge = 66
/* 
if(newAge <= 18) {
  console.log("You get a junior discount")
} else if(newAge >= 65){
  console.log("You get a senior discount")
} else {
  console.log("No discount for you")
}
 */
let first = 10;
let second = 20; 

/* if(first === second ) {
  console.log("They're equal")
} else {

  if( first > second){
    console.log("First is greater")
  } else {
    console.log("Second is greater")
  }

} */

/* 
pseudocode example


if (username) {
  //check the db for the user
  if(password === userPassword){
    // login
  } else {

    if(loginAttempts < 5) {
      console.log("Wrong password")
    } else {
      console.log("Account blocked")
    }
  }
}
 */

// switch

const pokemon = "Totodile"
let type = ""

switch(pokemon){
  // if(pokemon ==== "Pikachu"){
  // type = "Electric"
 // }
  case 'Pikachu':
    type = "Electric"
    break;
  case 'Bulbasaur':
    type = "Grass"
    break;
  case 'Charmander':
    type = "Fire"
    break;  

  case 'Squirtle':
  case 'Totodile':
  case 'Mudkip':
    type = "Water"
    break;

  default:
    type = "No type found"

}
//console.log(type)


// Loops

// While

let count = 0;

/* while(count <= 100){
  // this code will repeat as long as the condition is true
  console.log(count)
  count++;
  // count += 1

}
console.log("outside the loop", count) */

// if(0 <= 100){
// console.log(0)
// count++;
//}

// if(1 <= 100){
// console.log(1)
// count++;
//}

// if(100 <= 100){
// console.log(100)
// count++;
//}

// do while

/* do {
  console.log(count)
  count++;
} while(count < 0)
 */

// using the while loop
// until count === 30
// console.log(count)
// console.log("ten")
// console.log("twenty")

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "ten", 11, 12, 13, 14

/* while(count <= 30){
  if(count === 10){
    console.log("ten")
  } else if(count === 20){
    console.log("twenty")
  }else {
    console.log(count)
  }

  //count is not dependent on the conditional outcome
  count++
}
 */


// for 

/* for(initialization; condition; finalExpression) */

/* for( let i = 0; i <= 100; i++){
console.log(i)
}

for( let i = 100; i >= 0; i--){
console.log(i)
} */

// for of - iterable

const city = "Amsterdam"

/* for(char of city){
  console.log(char)
}
 */
// break and continue


/* while(count < 5){
  count++
  
  if(count === 3) {
    //break;
    continue;
  }
  console.log(count)
}
 */

// loop from 0 to 20

for (let i = 0; i <= 20; i++){
// 0 is even
// 1 is odd
// 2 is even
if( i % 2 === 0){
  console.log(`${i} is even`)
  } else {
  console.log(`${i} is odd`)
  }
}