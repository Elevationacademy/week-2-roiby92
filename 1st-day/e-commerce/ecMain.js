const aboutUs = document.getElementById('aboutUS')
const allP = document.getElementById('allP')
const cartP = document.getElementById('cartP')
const container = document.getElementById('result-container')

const cart = [{ name: "Apple", price: 5.56, img: "https://images.unsplash.com/photo-1583431791517-92c079837787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2271&q=80" }]

const products = [
    { name: "Apple", price: 5.56, img: "https://images.unsplash.com/photo-1583431791517-92c079837787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2271&q=80" },
    { name: "Banana", price: 4.21, img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80" },
    { name: "Mango", price: 3.49, img: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" },
    { name: "Lemon", price: 5.99, img: "https://images.unsplash.com/photo-1580412092181-219a7b10e6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80" },
    { name: "Grapefruit", price: 8.21, img: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80" },
];


const summary = document.createElement('p')
summary.innerHTML = 'Going shopping” no longer implies hours of walking circles around a mall or the lingering smell of food court specialties. Instead, shopping is now starting to seem like it could fit nicely into the Dr. Seuss classic, Green Eggs and Ham. It can be done “in a house or with a mouse, in a boat or with a goat, on a train or in a tree.” Ok, fine, most people are probably either virtually pushing their shopping cart from the comfort of their bed or when they’re supposed to be paying attention to a lecture—but that just sounds less poetic. '


aboutUs.onclick = function () {
    container.innerHTML = ""
    container.appendChild(summary)
}


// allP.onclick = function () {
//     container.innerHTML = ""
//     for (let i in products) {
//         const button = document.createElement('button')
//         button.innerHTML = 'Add To Cart'
//         //button.onclick 
//         let item = document.createElement('div')
//         item.style.display = 'block'
//         item.innerHTML = `name : ${products[i].name} \n price : ${products[i].price}`
//         item.setAttribute('img' , `${products[i].img}`)
//         container.appendChild(item)
//         container.appendChild(button)
//     }

const showProducts = function () {
    container.innerHTML = ""
    const cartDiv = document.createElement('div')
    cartDiv.clas
    const button = document.createElement('button')
    button.innerHTML = 'Add To Cart'
    //button.onclick 
    let item = document.createElement('div')
    item.style.display = 'block'
    item.innerHTML = `name : ${products[i].name} \n price : ${products[i].price}`
    item.setAttribute('img', `${products[i].img}`)
    container.appendChild(item)
    container.appendChild(button)
}

cartP.onclick = function () {
    container.innerHTML = ""
    const carts = document.createElement('div')
    carts.innerHTML = cart
    container.appendChild(carts)

}

