const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}


$(document).ready(function (){

    $nav = $('.nav');
    $toggleCollapse= $('.toggle-collapse');

    /*Click Event on toggle menu*/
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');
    })

    //owl carousel for blog

    $('.owl-carousel').owlCarousel({
    loop:true, //Loops through the blog posts
    autoplay:true, //Plays on its on
    autoplayTimeout:3000, //Time taken to move to next blog
    dots:false, //Removes the dots below
    nav:true, //Enables the above arrows
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive:responsive
    });

    //Click to scroll to top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        }, 3000)
    })

    //AOS Instance
    AOS.init();

//Rotating Text - Morphtext 
 $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
    });
    
});

// set year
date.innerHTML = new Date().getFullYear();

//Typing Text
var typed = new Typed('.typing', {
    strings: ["TECH.", "FASHION.", "SUPER CARS."],
    loop:true,
    typeSpeed: 30,
    backSpeed: 3,
    backDelay: 1000,
  });

 