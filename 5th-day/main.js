// // we are attach a listener to the element with a class = remove
// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id) // after we clicking that  specifec element(this!!)
//     //closest() will serch for the first parent with the class of post, then serch for data()."selected" attribut (data-id)
//   })//and alet it on screen


// $('button').on('click',function(){
//     const $butn = $(this)
//     const $div = $butn.closest('div')
//     const $text = $div.find('span').text()
//     console.log($text);
// })

// $('button').on('click',function(){
//     const $butn = $(this)
//     const $div = $('.container')
//     const $text = $div.find('p').text()
//     console.log($text)
// })


///ex

$('.generator').on('click',function(){
    const $cmp = $(this).closest('.computer')
    const $cmpId = $cmp.data().id
    const $cmp_id = {cmp_id: $cmpId}
    const $procId = $cmp.find('.processor').attr('id')
    const $bus = $cmp.find('.BUS').text()
    console.log(`Processor ID: ${$procId} \nComputer's data-id: ${$cmp_id.cmp_id} \nBUS: ${$bus}`);
})

$('.validator').on('click',function(){
    const $cmp = $(this).closest('.computer')
    const $gen = $cmp.find('.generator').text()
    const $mb = $cmp.find('.MB').text()
    const $qrs = $cmp.find('.QR').text()
    console.log($qrs);
    console.log($gen , $mb , $qrs);
})
