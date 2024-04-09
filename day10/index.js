// Scope

// Global scope
// Everything declared here is available everywhere

// Function scope
// Only available inside the function and child scopes

// Block scope
// When we use curly brackets
/*   if(true){
    let myName = "André"

    if(true){
      console.log(myName)
      const lastName = "yes"
    }
    console.log(lastName)
} */

// var and scope
// Global Scope pollution

var message = "Hello from the Global Scope"

function helloFromLocalScope(){
  console.log(message)
  var greeting = "Hello from function scope"
  return greeting;
}


/* console.log(message)
console.log(greeting)
 */
let outerLet = 1

function innerFunction(){
  console.log(outerLet)
  let innerLet = 2
}

outerLet = 1
//console.log(innerLet)

// var allows us to declare a variable with the same name
var message = "Hey again"
//console.log(message)

var message = "Yup"
//console.log(message)

/* for(var i = 0; i<=30; i++){
  console.log(`Iteration ${i}`)
}

console.log("Outside the loop", i) */

/* for(let i = 0; i<=30; i++){
  console.log(`Iteration ${i}`)
}
 */
//console.log("Outside the loop", i)

// var gets hoisted but it's initialized with undefined
//console.log(myVar)
var myVar = 100


// use let instead of var

// const
const age = 50;
//const myAge;
const myObj = {}

//myObj = {}

// Shadowing

let a = 4


function anotherScope(){
 let a = 6;
 console.log(a)
 let b = 3;
}
//console.log(a) // -> 4 

//anotherScope() // -> 6
//console.log(a) // -> 4
//console.log(b) // -> ReferenceError
//throw new Error("My custom error")


// Primitive Values and Reference Values

// strings, numbers, booleans, null, undefined, symbol
// immutable

let city = "Lisbon"

let town = "Lisbon"

//console.log(city === town)

let foo = 2;
let bar = foo;
foo = 4;

//console.log(foo) // -> 4
//console.log(bar) // -> 2


// Reference values (Objects and arrays)
const pokemon1 = {
  name: "Jigglypuff",
  type: "Psychic"
}

const pokemon2 = pokemon1

//console.log(pokemon1)
//console.log(pokemon2)

pokemon1.name = "Mew"

//console.log(pokemon1) // -> Mew
//console.log(pokemon2) // -> Jigglypuff

const pokemon3 = pokemon1

pokemon2.type = "Normal"

//console.log(pokemon1) // -> Normal
//console.log(pokemon2) // -> Normal

const emptyObj = {}
//console.log(emptyObj == {})

//console.log(pokemon2 === pokemon3)


//console.log(pokemon4 == pokemon2)

//console.log(ironhackers == students)


const newPokemon = { name: 'Mew', type: 'Normal' }


// Json Parse and stringify

//stringify turns into a string and breaks the reference to the object
const newCopyString = JSON.stringify(newPokemon)

//console.log(newPokemon)
//console.log(newCopyString)

// parse turns the string into an object (if it's a valid format)
const actualCopy = JSON.parse(newCopyString)

//console.log(actualCopy, typeof actualCopy)

const myCopy = JSON.parse(JSON.stringify(newPokemon))

//console.log(newPokemon == actualCopy)


const students = ["Daniela", "Magda", "Eva", "Sushil", "Carolina"]

// shallow copy
//const ironhackers = students.slice();
const ironhackers = [...students]

console.log(students == ironhackers)

const pokedex = [
  ["Caterpie", "Squirtle"],
  ["Raticate", "Snorlax"]
]

const dexCopy = [...pokedex]

//console.log(pokedex[0] == dexCopy[0])

pokedex[0].push("Alakazzam")

pokedex.push(["Articuno"])

console.log(pokedex)
console.log(dexCopy )

//deep copy 
const deepDexCopy = JSON.parse(JSON.stringify(pokedex))


console.log(deepDexCopy[0] == pokedex[0])

// Mutability