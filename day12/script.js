// Document Object Model
// DOM API
//console.log("Hello")


// DOM manipulation methods

// gtElementById
/* let branchDiv = document.getElementById("branch")

branchDiv.innerHTML = "This is a branch"

branchDiv.style.backgroundColor = "green"
branchDiv.style.border = "2px solid black"

const changeColor = (element) => {
  if(element.style.backgroundColor === "green") {
     element.style.backgroundColor = "red"
    } else {
    element.style.backgroundColor = "green"
  }
}

//console.log(branchDiv)
// the third argument is the argument that will be passed to the callback function
 //let intervalId = setInterval(changeColor, 1000, branchDiv)


// getElementsByClassName

let leafDivs = document.getElementsByClassName('leaf')
// HTMLCollection - Array-like object
// no array methods, but it has length
/* 
for (let i = 0; i < leafDivs.length; i++ ){

 leafDivs[i].innerHTML = Math.floor(Math.random() * 10)
}
 */

/* const htmlCollection = {
  "0": "firstElement",
  "1": "secondElement",
  name : "André"
} 

//console.log(leafDivs)

//getElementsByTagName - returns an array-like object

//let allDivs = document.getElementsByTagName("div")

//console.log(allDivs)

// querySelector - returns the first element that it finds that matches the query

let firstLeaf = document.querySelector(".leaf")

//console.log(firstLeaf)

//querySelectorAll - returns an array-like object

let twoDivs = document.querySelectorAll("#branch, .leaf")


//console.log(twoDivs)

// let fruitDiv = document.getElementsByClassName("fruit")[0]
let fruitDiv = document.querySelector(".fruit")

//fruitDiv.className = "leaf fruit twig"

fruitDiv.classList.add("leaf")
fruitDiv.classList.remove("fruit")
fruitDiv.classList.toggle("dark") */

//console.log(branchDiv.id)


// -------------------------

let aTag = document.getElementById("google-link")

// getAttribute, removeAttribute, setAttribute

//console.log(aTag.getAttribute("href"))

aTag.removeAttribute("class")

// set attribute adds or changes attributes
aTag.setAttribute("href", "https://www.google.com")
aTag.setAttribute("target", "_blank")

//createElement
const h2Title = document.createElement("h2")
h2Title.innerText = "Hello"

//getting the parent element:
let contentDiv = document.getElementById("content")

// appendChild - always appends at the end of the parent
//document.body.appendChild(h2Title)
//contentDiv.appendChild(h2Title)

//insertBefore

const ulTag = document.getElementById("item-list")
const h1Tag = document.getElementById("title")

//console.log(ulTag)

//document.insertBefore(h1Tag, h2Title)


//removeChild

//contentDiv.removeChild(h1Tag)
//h1Tag.remove()

//contentDiv.innerHTML = ""

//contentDiv.innerHTML += '<h3 class="leaf">Im a h3</h3>'

//get the button
const btn = document.getElementById("add-item-button")

// accessing the property
/* btn.onclick = function () {
  console.log("clicked")
}
 */

//add an event listener

//let counter = 0;

//get the input
let itemInput = document.getElementById("item-input")

btn.addEventListener('click', function () {

  //getting the value from the input
  const inputValue = itemInput.value

  console.log(inputValue)
  //adding the value to the li
  ulTag.innerHTML += `<li>${inputValue}</li>`

  

  //clearing the value
  itemInput.value = ""

})

//event object
h1Tag.addEventListener('click', function(e){
  console.log(e.currentTarget)
})










