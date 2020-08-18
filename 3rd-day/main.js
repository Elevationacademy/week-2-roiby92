//********** callBacks functions **********

// let users = []

// //synchronous code
// // const getData = function () {
// //     users = [{ name: "Rick" }, { name: "Morty" }]
// //     console.log("Got users")
// // }

// //asynchronous code
// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()


// this code will print second and then first cuz the setTimeOut , problem!!
// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()

// this code will print first and then second cuz of the callBack function and it will take 3 sec(or more cuz its make alot of prosses in some cases)
// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument

// let users = []

// const getData = function (display) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         display()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

// const doSomething = function(){
//     console.log("something")
//   }
//the function parameter in setTimeout called anonymous cuz it dosnt have a name
//   setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds


//   const timer = function(){
//     console.log(new Date())
//   }

//   setInterval(function (){
//     console.log(new Date())
//   }, 1000)

//*******   Arrow functions *********

// const square = num => console.log(num * num)

// square(4)
// square(5)
// square(10)

// const getFormalTitle = (title, name) => `${title} ${name}`
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"
// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function but here now one is callint the setTimeout, so the object is window
//             ﻿console.log("The name is: " + this.name) // the this keyword dont refers to eny object so te result is undefine
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change CUZ Arrow finction refer to where you calld the function and not how calld it
//             ﻿console.log("The name is: " + this.name) // this refers to our object !! lexical scope !!
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()


