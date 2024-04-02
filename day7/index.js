// Functions

// function declaration
//named function that CAN be stored in a variable
function sum(a, b){
  return a + b;
}

const mySum = sum;


// function expression
//anonymous function that IS stored in a variable
const newSum = function (a, b){
  return a + b;
}

/* console.log(mySum(2, 3))
console.log(newSum(2, 3)) */



//checkFunctionDeclaration()
//hoisting - read and "put at the top"
function checkFunctionDeclaration(){
  console.log("Function declaration")
}


//doesn't get hoisted
const checkFunctionExpression = function (){
  console.log("Function expression")
}
//checkFunctionExpression();


// Callback

// a function passed to another one as an argument

function toUseLater (){
  
}

function doFirst(callback){
  // setTimeout(callback, delay)

  // we pass an anonymous function as the callback to setTimeout
  // we could pass a named function, but since we only want to execute once, there's no need
  setTimeout(function (){
    console.log("Do this first!")
    callback()
  }, 2000)
}

function doSecond(){
  console.log("Do this in second!") 
}

function doWhenever(){
  console.log("Do this whenever!")

}

//doFirst(doWhenever());

/* let myReturn = doSecond()
console.log(myReturn) */


// Arrow syntax
// ES6 - 2015 

/* 
function expression, traditional syntax

const greeting = function (name){
  console.log(`Hello there ${name}`)
} */

// arrow syntax
/* const greeting = (name) => {
  console.log(`Hello there ${name}`)
} */

// shorter version

const arrowSum = (a, b) => a + b;

const greeting = (name) => `Hello there ${name}`
/* const greeting = (name) => {
  return `Hello there ${name}`
} */

//console.log(arrowSum(5, 6))

//greeting("Gonçalo")

//this 
/* 
without arrow function, doesn't work
const user = {
  name: "Gonçalo",
  role: "Data Teacher",
  age: 25,
  // method
  getOlder: function(){
    setInterval(function (){
      console.log(this)
     this.age += 1
      console.log(this.age) 
    }, 1000)
  }
} */
const user = {
  name: "Gonçalo",
  role: "Data Teacher",
  age: 25,
  // method
  getOlder: function(){
    //using arrow syntax brings us to the parent scope
    setInterval(() => {
      //console.log(this)
      this.age += 1
      console.log(this.age) 
    }
, 1000)
  }
}
//user.getOlder()
/* 
const user2 = {
  name: "Rita",
  role: "UXUI Teacher",
  age: 24,
  // method
  getOlder: function(){
    console.log(this.age)
    console.log(this.name)  
  }
} */


//user.car = "Ferrari"
//user2.getOlder()






// array methods
// map, reduce, filter
// sort, reverse

const numbersArray = [1, 2, 3, 4]

/* const newArray = []

numbersArray.forEach((number) => {
  number *= 2
  newArray.push(number)
})

console.log(newArray) */


// with map - loops over the array
// map returns a new array with new values
// array mutation

/* const newArray = numbersArray.map((number) => {
  const newNumber = number * 2 
  return newNumber
}) */
const newArray = numbersArray.map((number) =>  number * 2)

console.log(newArray)

const silent = ["can", "you", "hear", "me", "?"]

const scream = silent.map((word)=> word.toUpperCase())

console.log(scream)

const cities = [
  "lisbon",
  "miami",
  "madrid",
  "berlin",
  "london", 
  "sao paulo",
  "mexico city",
  "badajoz"
]

const capitalCities = cities.map((city) => {
  return city[0].toUpperCase() + city.slice(1)
})

//const capitalCities = cities.map((city) => city[0].toUpperCase() + city.slice(1))
console.log(capitalCities) // ["Lisbon", "Miami", ...]