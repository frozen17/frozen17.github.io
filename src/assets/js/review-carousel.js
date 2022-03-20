$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items: 1
        },
        560:{
            items: 2
        },
        800:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
})