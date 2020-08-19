const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

$('#postButten').on('click', function () {
    posts.push({
        name: $('#name').val(),
        text: $('#text').val()
    })
    render()
})


$('#timeline').on('click', '.post', function () {
    for (let i in posts) {
        if (`${posts[i].name}: ${posts[i].text}` === $(this).text()) {
            posts.splice(i, 1)
        }
    }
    render()
})


const render = function () {
    $('#timeline').empty()
    for (let i in posts) {
        $('#timeline').append(
            `<div class="post">${posts[i].name}: ${posts[i].text}</div>`
        )
    }
}
render()



// $("post").on("click", function () {
//     const name = $("input-name").val()
//     const text = $("input-text").val()
//     $("#timeline").append(newPost(name, text))
//     //where newPost is a funciton that creates a post html element with the given name and text
// })

// $("post").on("click", function () {
//     posts.push({
//         name: $("input-name").val(),
//         text: $("input-text").val()
//     })
// })