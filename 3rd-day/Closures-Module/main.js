// const createPerson = function(name, age){
//     const person = {
//         personName: name, 
//         personAge: age
//     }

//     return person
// }

// createPerson("Elon", 42)
// console.log(person) // will show error cuz person is not define ousside the function scope
// //for using that way wee neet to create new var => const person = createPerson("Elon", 42)

// const mathOperations = function(){
//     const add = function(x, y){ //new function that gets 2 numbers as parameters
//         return x + y // sum the parameters and return them
//     }
//     return add // the original function return the inside function
// }
// const math = mathOperations() // creating a variable that invoket the function
// console.log(math(1,2))// printing the invoket of the function. notic that we send some arguments cuz the return function has parameters




// ******** Closures **********
//A closure is an inner function that has access to the outer (enclosing) function’s variables.
// const foo = function () {
//     const x = 1

//     const bar = function () {
//         console.log(x) //notice this inner function using the outer function's variable
//     }

//     return bar
// }

// const baz = foo() //out here, x doesn't exist
// baz() //but when we invoke baz, we're printing x!

/*It starts by setting the variable baz to the result of calling the function foo
The function foo gets called, initializing the variable x and the function bar (in its scope)
Finally, foo returns the function bar back to baz */



// const setCounter = function (num) {
//     let counter = 0

//     const count = function () {
//         counter += num;
//         console.log(counter)
//     }

//     return count
// }

// const increment = setCounter(2)
// increment()


//spot check

// const family = function(){
//     let members = []
//     const birth = function(name){
//         members.push(name)
//         console.log(members)
//     }

//     return birth
// }

// const giveBirth = family()
// giveBirth('roi')
// giveBirth('shir')
// giveBirth('yam')


// //************* Modules ********* 

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// const m = mathOperations()

// console.log(m.add(13,29))
// console.log(m.sub(5,5))
// console.log(m.mult(1.75,24))
// console.log(m.div(7,m.div(36,6)))


// const Users = function () {
//     const users = []

//     const addUser = function (name) {
//         users.push(name)
//         return console.log(users)
//     }

//     const deleteUser = function (name) {
//         for (let i = 0; i < users.length; i++) {
//             if (users[i] === name) {
//                 users.splice(i, 1)
//                 console.log("user was deleted " + users)
//             }
//         }
//     }
//     return { addUser, deleteUser }
// }

// const user1 = Users()

// user1.addUser('roi')
// user1.addUser('shir')
// user1.addUser('yam')
// user1.addUser('ronaldo')
// user1.deleteUser('roi')
// user1.deleteUser('shir')
// user1.deleteUser('ronaldo')
// user1.deleteUser('roi')
