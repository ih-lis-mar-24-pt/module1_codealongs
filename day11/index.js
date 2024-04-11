// Single - threaded (executes one block of code at a time
// Synchronous - Reads code from top to bottom, if a process takes some time, it's going to block the thread

/* for(let i = 0; i <100000000000; i++ ){
  console.log(i)
}

console.log("Delayed") */

// Asynchronous behaviours

// const timeoutId = setTimeout(callback, delayInMs)



function someCallbackFunction(){
  console.log("Not anonymous")
}

//const timeoutId2 = setTimeout(someCallbackFunction, 10000)


//console.log("After timeout")

// To cancel a timeout
// clearTimeout(timeoutId2)

/* 
const timeoutId = setTimeout(() => {
  console.log("Inside timeout")
}, 2000) */

// setInterval

/* const intervalId = setInterval(() => {
  console.log("tick")
}, 1000)

const intervalId2 = setInterval(() => {
  console.log("tock")
}, 2000)
 */

//console.log("Hellooooo")

// cancel the interval

//clearInterval(intervalId)


function countToTen(){
 // count from 1 to 10
 // every second
 //once you reach 10, you stop

 let currentTime = 1;

 const intervalId = setInterval(()=>{
   console.log(currentTime)
   if(currentTime >= 10){
     clearInterval(intervalId)
   }
   currentTime++
  }, 1000)
  
}

//countToTen()

const user = {
  name: 'Gonçalo',
  age: 25,
  getOlder: function () {
    const intervalId = setInterval(() => {
      if(this.age >= 100) clearInterval(intervalId)
 
       this.age += 1; // this no longer referes to the user it refers to the setInterval
      console.log(this.age);
    }, 1000);
  },
};

user.getOlder();