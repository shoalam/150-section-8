$(document).ready(function(){

	//accordion init
	
   $('.team-list').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    nav:true,
    navText: ["<i class='fa fa-long-arrow-left'>", "<i class='fa fa-long-arrow-right'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})
});
