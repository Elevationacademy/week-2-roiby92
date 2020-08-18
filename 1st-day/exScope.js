//    week 2!!!
//                  Scope day!

// const bag = ["flashlight", "medicine"]
// const moreItems = ["tent", "water bottle", "knife", "rope"]

// if (bag.length < 3) {
//     const nextItem = moreItems[0]    
//     bag.push(nextItem)
// }

// console.log(bag)
// console.log("Added " + nextItem) // bring us an error cuz nextItem is not define globaly, only in the if scope localy

// let height = 1.73 // global scope

// const grow = function(){
//   height += 0.1    
// }

// grow() //invokat the func
// console.log(height) // console 1.83


// const getBaseHeight = function () {
//     const height = 1.73  // local scope vari    
//     return height
// }

// const grow = function () {
//     height += 0.1    
// }

// grow() // it willl bring back error cuz the vars are define localy and the functions culd not have acssess to them



// const names = ["Allison", "Beatrice", "Charles"]

// for (let n of names) {
//     let coolName = "cool " + n
//     console.log(coolName)
// }

// console.log(coolName) // throws an error



//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")//will pring runing 8 times
    }
    console.log("Finished running " + distance + " miles")// will print
}


console.log("Damn, you see this gal? She ran " + distance + " miles")// print us an error cuz distance is define localy in the if


//===================================================================================//Section 2//===================================================================================
if (13 == "space") { //??
    let cowSound = "moo"//local scope
}
else {
    console.log("Cow says " + cowSound) // print error cuz cowSound is in the if
}

//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder) // will print
    }

    console.log("Finished serving all the orders: " + orders)// will print cuz function gets orders as a parameter
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it" //global

const getSeed = function () {
    const seed = "brown seed" // local
}

const plant = function () { //global
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot) // prints error
}

plant()

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }] // global but referemce
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found // err cuz found is local var in the if & for
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.") // ?
}

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false // global

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh") // print that
}
else {
    console.log("Here we go again...")
}






