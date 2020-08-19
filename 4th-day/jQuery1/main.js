// // ************** jQuery ***********************

// // $("#container") // jQuer
// // //the same as writhing
// // document.getElementById("container") //vanila JS

// // //vanilla JS
// // document.getElementById("container").style.display = "none"

// // //jQuery
// // $("#container").hide()
// //  // when we select elements with jQuery,
// //  // we also get methods that can work on the element,
// //  // on top of the element itself

// // const heder = $('h1')

// // console.log(heder)
// // console.log(jQuery)
// // console.log($)
// // const myQuery = function (selector) {
// //     if (selector[0] == "#") {
// //         const elementId = selector.split("#")[1] //will return everything after the # in selector 
// //         return document.getElementById(elementId)
// //     }
// // }

// // console.log(myQuery("#h1"))

// // const sayHi = function () {
// //     console.log("Hi!")
// // }

// // const $ = sayHi

// // $() //prints "Hi!"

// const header = $('h1')
// header.css('background-color', 'blue') //inline style

// const myDiv = $('.red-div')

// myDiv.css('background-color', "red")//inline style

// const li1 = $('ul li:first')
// const li2 = $('ul li:nth-child(2)')
// li1.css('background-color', 'green')//inline style
// li2.css('background-color', 'pink')//inline style

// const otherDiv = $('#brown-div')

// otherDiv.css('background-color', 'brown')//inline style

// const b1 = $('#b1')
// const b2 = $('#b2')

// //b1.addClass('box')
// //b2.addClass('box')

// const data = $("#dataDiv").data()
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate

// const bColor = () => {
//     otherDiv.css('background-color', 'blue')
// }

// otherDiv.hover(bColor)
// const input = $('#my-input')
// const alertVal = () => {
//     alert(input.val())
// }

// $('button').on('click', alertVal)

// const chengeColor = function () {
//     $(this).css("background-color", "blue")
// }

// $(".box").hover(chengeColor)


// //creating element
// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)

// $("body").append(elem) // work like document....appendChild

// // adding to exsist
// // we have element with fruots class
// $('.fruits').append('<p class="red">Raspberry</p>') // ading a <p> element with class = name
// $('.fruits').append('<p class="brown">Kiwi</p>') // adding a <p> element with calss = brown

// // we can concate also
// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!
// $('body').append(item)

// $(".feedme").on("click", function () {
//     let divCopy = `<div> ${$(this).text()} </div>`
//     $("body").append(divCopy)
// })


// // const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// // for (let name of names) {
// //     $("body").append(`<div>${name}</div>`)
// //}
// // will added div for every person in the array

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for(let name of names){
//     $('body').append(`<div>${name.first} - ${name.last}</div>`)
// }
// // for (let name of names) {
// //     $("body").append(`<div class=human>${name.first} - ${name.last}</div>`)


// //will remove all <p> in the HTML
// //$("p").remove()
// // remove <p>s with a certain class
// //$("p").remove(".brown")


// $('body').append(`<p class='spot'> Hello World </p>`)

// $('.spot').hover(function() {
//     (this).remove()
// })

//spot check 12

// Write a listener that appends a div with a class of blog to the blogs div
// Each div should have some text inside of it - it will be the same text each time
// Write another listener that changes any element with a class of blog to have the text "blargh"
// Use jQuery's text method to change the text inside an element

$('button').on('click', function(){
    const mainDiv = $('#blogs')
    const newDiv = `<div class="blog">hello</div>`
    mainDiv.append(newDiv)
})

$('#blogs').on('click','.blog',function(){
    $(this).text("blargh")
})

// const addDiv = function () {
//     $("body").append("<div class=box></div>")
// };

// $("button").on("click", function () {
//     addDiv()
// });

// $(".box").on("click", function () {
//     alert("hi")
// });

// // bad way of handeling dinamic listener!!!!
// const addDiv = function () {
//     $("body").append("<div class=box></div>");

//     $(".box").on("click", function () {
//         alert("hi"); // create a listener every time it create a div
//     });
// };

// $("button").on("click", function () {
//     addDiv();
// });

// //!!!!!!!!!!!!!!!!!!!!!


//the smart way!!
// const addDiv = function() {
//     $("body").append("<div class=box></div>");
//   };
  
//   $("button").on("click", function() {
//     addDiv();
//   });
  
//   $("body").on("click", ".box", function() {
//     alert("hi");
//   });

  /*Instead of adding the listener to .box we're adding it to body
We've added another argument to the on function */
  