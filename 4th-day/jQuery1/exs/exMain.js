// //ex1
// // const input = `<input type="text" placeholder="Enter your name">`
// // const butn = `<button id="butn">Add Name</button>`
// // $("body").append(input)
// // $("body").append(butn)


// // const addToList = function (item) {
// //     const newItem = `<li class="item"> ${item}</li>`
// //     $('#myList').append(newItem)
// // }



// // $('#butn').on('click',function(){
// //     addToList($('input').val())
// //     $('input').val(" ")
// // })

// // $('#myList').on('click','.item',function(){
// //     $(this).remove()
// // })



// //ex2
// const div1 = '<div class="box"></div>'
// const div2 = '<div class="box"></div>'
// $('body').append(div1)
// $('body').append(div2)

// $('body').on('mouseenter','.box',function(){
//     $(this).css('background-color', 'red')

// })
// $('body').on('mouseout','.box',function(){
//     $(this).css('background-color','#8e44ad')

// })


//ex3
//Write some JS that recreates the following (click on the items):
/*Do not change any of the HTML/CSS
Only items that are in stock (based off the data attribute) should be clickable
You should add the clicked item to the #cart
When "Shoe" is clicked, for example, you should grab its text using .text()and then add this:
 <div class=cart-item>Shoe</div> - create this using template literals */

$(".item").on('click', function () {
    if ($(this).data().instock) {
        $('#cart').append(`<p>${$(this).text()}</p>`)
    }
})