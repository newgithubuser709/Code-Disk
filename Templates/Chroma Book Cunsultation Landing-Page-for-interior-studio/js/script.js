//[1] Navigation Toggle Function  
//[2] hide navigation from nav ancors & nav close btn 
//[3] hide navigation on outside click
//[4] header navigation ancors hover anim
//[5] header navigation ancors hover anim for mobile
//[6] footer get live year
//[7] document scroll function
//[8] & [9] toggler bg change on scroll & show top btn on scroll 


// 
//  
//  


//[1] Navigation Toggle Function ___________________________________
function show_nav() {
    $(".mobile-navigation-wrap").addClass("mobile-navigation-wrap-script");
    $(".mobile-navigation").addClass("mobile-navigation-script");
    $(".mobile-navigation-inner").addClass("mobile-navigation-inner-script");
    $(".mobile-navigation-close-btn").addClass("mobile-navigation-close-btn-script");
};

//[2] hide navigation from nav ancors & nav close btn __________________
function hide_nav() {
    $(".mobile-navigation-wrap").removeClass("mobile-navigation-wrap-script");
    $(".mobile-navigation").removeClass("mobile-navigation-script");
    $(".mobile-navigation-inner").removeClass("mobile-navigation-inner-script");
    $(".mobile-navigation-close-btn").removeClass("mobile-navigation-close-btn-script");
}

//[3] hide navigation on outside click _____________________
$(".mobile-navigation-wrap").click(function(e) {
    if ($(e.target).is(".mobile-navigation-wrap") &&
        !$(e.target).is(".mobile-navigation")) {
        $(".mobile-navigation-wrap").removeClass("mobile-navigation-wrap-script");
        $(".mobile-navigation").removeClass("mobile-navigation-script");
        $(".mobile-navigation-inner").removeClass("mobile-navigation-inner-script");
        $(".mobile-navigation-close-btn").removeClass("mobile-navigation-close-btn-script");
    }
})

//[4] header navigation ancors hover anim ___________________________________
$(".navigation-ancor").mouseover(function() {
    $(this).children(1).css({ "width": "100%", "left": "0" });

    $(".navigation-ancor").mouseout(function() {
        if ($(this).children(1).css({ "width": "100%" }))
            setTimeout(() => {
                    $(this).children(1).css({
                        "width": "0",
                        "left": "auto",
                        "right": "0",
                    });
                },
                190);
    });
});


//[5] header navigation ancors hover anim for mobile _________________________
$(".navigation-ancor-mobile").mouseover(function() {
    $(this).children(1).css({ "width": "100%", "left": "0" });

    $(".navigation-ancor-mobile").mouseout(function() {
        if ($(this).children(1).css({ "width": "100%" }))
            setTimeout(() => {
                    $(this).children(1).css({
                        "width": "0",
                        "left": "auto",
                        "right": "0",
                    });
                },
                190);
    });
});


//[6] footer get live year ____________________________________________
let footer_year = document.getElementById("footer_year");

let date = new Date
footer_year.innerHTML = date.getFullYear()


//[7] document scroll function ___________________________________________
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    //[8] & [9] toggler bg change on scroll & show top btn on scroll 
    if (scrollTop >= $(".hero-container").offset().top) {
        //[8] back to top button on scroll anim ____for if condition________
        $(".nav-toggler").addClass("nav-toggler-script");
        //[9] back to top button on scroll anim ____for if condition________
        $(".back-to-top").addClass("back-to-top-script");
    } else {
        //[8] back to top button on scroll anim ___for else condition________
        $(".nav-toggler").removeClass("nav-toggler-script");
        //[9] back to top button on scroll anim ___for else condition________
        $(".back-to-top").removeClass("back-to-top-script");
    };
});