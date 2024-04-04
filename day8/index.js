const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];

// map doesn't mutate
const capitalCities = cities.map((city) => {
  return city[0].toUpperCase() + city.slice(1);
});

//console.log(capitalCities)

// reduce
/* 
array.reduce(function (accumulator, currentValue){
  return accumulator + currentValue
}, initialValue)

array.reduce((acc, val)=> acc + val) */

const numbersArray = [2, 4, 6, 8]

const totalSum = numbersArray.reduce((accumulator, currentValue)=> {
  //console.log("acc: ", accumulator)
  //console.log("currentValue: ", currentValue)
  return accumulator + currentValue
}, 0)

//console.log(totalSum)

const separate = ["U", "n", "i", "t", "e", "d"]

//const united = separate.reduce((acc, val) => acc + val)
const united = separate.reduce((acc, val) => {

  return acc.toUpperCase() + val.toUpperCase()
})

//console.log(united)

const store = [
  {name: 'Keyboard' , price: 50, available: true},
  {name: 'Mouse' , price: 20, available: false},
  {name: 'Screen' , price: 300, available: true},
  {name: 'Speakers' , price: 40, available: false},
]

//create a function that takes an array of products as an argument, and returns the average price of all products

const calcAvg = (arr) => {
  //logic
  //we'll receive an array of objects, not numbers 
  const productSum = arr.reduce((acc, val) => {
    return acc + val.price
  }, 0)
  // 
  //const average = productSum / something 👀
  return productSum / arr.length
}

//console.log(calcAvg(store))

// filter - returns a new array

const anotherNumArray = [1, 2, 3, 4, 5, 6, 7, 8]

/* console.log( 2 == "2")
console.log( 2 === "2") */

/* const evenNumbers = anotherNumArray.filter((val) => {
  if(val % 2 === 0){
    return val
  }
}) */

const evenNumbers = anotherNumArray.filter((val) => val % 2 === 0 )

//console.log(evenNumbers)



const store2 = [
  {name: 'Keyboard' , price: 50, available: true},
  {name: 'Mouse' , price: 20, available: false},
  {name: 'Screen' , price: 300, available: true},
  {name: 'Speakers' , price: 0, available: false},
]
const availableProducts = store2.filter((product) => product.available)

//console.log(availableProducts)

// sort - mutates the array


const numbers2 = [22, 334, 876, 19212, 88, 817282]

//numbers2.sort()

function defaultSort(a, b){
  if (a < b) return -1
  if (a > b) return 1
  if (a === b) return 0
}

numbers2.sort((a, b) => {
  if(a - b) return 1
  if(!(a - b)) return -1
  if(a === b) return 0
})

numbers2.sort((a, b) => a - b)
console.log(numbers2)

const words = ["hello", "Oi", "Ola", "aloha", "Hi"]

words.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1
  if (a.toLowerCase() > b.toLowerCase()) return 1
  if (a.toLowerCase() === b.toLowerCase()) return 0
})

console.log(words)

//store2.sort((a, b) => a.price - b.price)
//console.log(store2)

// reverse  - mutates the array

words.reverse()

console.log(words)

