$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    navText : ["<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>",
    "<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>"]

})