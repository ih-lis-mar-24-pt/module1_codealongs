/* function getUser(email){

  if(email) {
    return UserActivation
  }
  throw new Error("Example")
  return "User not found"
} */

/* getUser();
function contactUser(email){

} */

// Objects

//const newObject = new Object()

const myObj = {
  // key:value pairs
  firstName : "Gonçalo",
  //we can declare keys as strings
  'long key here' : null
}

const myStore = {
  keyboard: false,
  screen: 320,
  mouse: 45
}

// dot notation
//console.log(myStore.keyboard)

//bracket notation []
//console.log(myStore['mouse'])

//console.log(myObj['long key here'])

// bracket notation w/ variables
const userInput = 'screen'
//console.log(myStore['userInput'])


// adding values
myStore.laptop = 1200
myStore['chair'] = 540


//updating values
myStore.screen = "Out of stock"
//console.log(myStore)

// in 
//console.log('keyboard' in myStore)

// Loop over an object
//Object.keys

//console.log("keys: ", Object.keys(myStore))

//Object.values
//console.log("values", Object.values(myStore))

//DSA
// for in
for (let product in myStore){

  //changing a value
  if(product === 'keyboard'){
    myStore[product] = 100000
  }

  //console.log(myStore[product])
  //console.log(myStore['keyboard'])
  //console.log(myStore['screen'])
}

//deleting keys
delete myStore.mouse;

//console.log(myStore)

/* myStore = {
  keyboard: false,
  screen: 320,
  mouse: 45
} */


//console.log("a" == "a")
/* console.log({} == {})
console.log([] == [] ) */


// create an object with two properties name and city

const user = {
  name: "André",
  city: "Lisbon"
}

// create 3 objects with the properties: title, artist, genre
const song1 = {
  title: "Ride on Time",
  artist: "Tatsuro Yamashita",
  genre: "City Pop",
}
const song2 = {
  title: "This is why",
  artist: "Paramore",
  genre: "Rock",
}
const song3 = {
  title: "Bad Romance",
  artist: "Lady Gaga",
  genre: "Pop",
}
// Add a property to user called favourites, which is an array with the 3 songs inside favourites: []

user.favourites = [song1, song2, song3]

/* user.favourites.push(song1)
user.favourites.push(song2)
user.favourites.push(song3) */

/* console.log(user)
console.log(user.favourites[0])
console.log(user.favourites[0].artist) */

const dex = [ 
  {name: "Pikachu", type: "Electric"},
  {name: "Bulbasaur", type: "Grass"},
  {name: "Charmander", type: "Fire"},
]

//console.log(dex[0].name)

const newPoke = {name: "Psyduck", type: "Water"}

dex.push(newPoke)

//console.log(dex[3].type)

const twoDimensional = [
  ["Bulbasaur", "Chickorita"],
  ["Charmander", "Torchic"]
]

console.log(twoDimensional[1][0])



/* const chessBoard = [
  ["black", "white","black", "white",],
  ["white", "black","white", "black",],
  ["black", "white","black", "white",],
]
 */

const webDevClass = {
  date: "March 2024",
  teacher: {
    name: "André",
    workingHours: 12,
    role: "Lead teacher"
  },
  students: [
    {name: "Magda", score: 10},
    {name: "Eva", score: 10},
    {name: "Daniela", score: 10},
    {name: "Shusil", score: 10},
    {name: "Carolina", score: 10},
  ]
}


const company = [
  [
   {name: "Oscar Scott" , email: "jujideki@tingab.mz" },
   {name: "Amelia Craig" , email: "wehbioje@itza.gb" },
   {name: "Edwin Garza" , email: "cewfuhced@kemkor.pk" },
  ],
  [
   {name: "Norman Tran" , email: "le@uliemror.fj" },
   {name: "Bess Schneider" , email: "ure@cec.dm" },
   {name: "Charlotte Colon" , email: "fun@ce.pr" },
  ],
  [
   {name: "Elizabeth Andrews" , email: "jo@utu.hr" },
   {name: "Stella Massey" , email: "ku@nom.do" },
   {name: "Katharine Luna" , email: "roldidpes@bihci.hk" },
  ],
]

company[1].forEach(function (person){
  console.log(person.email)
}) 


const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (value){
console.log(value)
})


/* console.log(company[1][2].name)
console.log(company[1][0].email)

console.log(company[2][0].name)
console.log(company[1][2].email)
console.log(company[0][2].name) */