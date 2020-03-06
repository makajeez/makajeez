//show the menu

// function showMenu() {
//     var toggle = document.getElementById("mobileMenu");

//     if (toogle.style.height == "0px") {
//         toggle.style.height = "20px";
//     }
// }

(document).ready(function () {
    ('.menu-toggler').on('click', function () {
        (this).toggleClass('open');
        ('.top-nav').toggleClass('open');
    });

    ('.top-nav .nav-link').on('click', function () {
        ('menu-toggler').removeClass('open');
        ('.top-nav').removeClass('open');
    });
})

function myFunction() {
    var x = document.getElementByClassName("nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

let loader = document.getElementByClassName('loader');

window.addEventListener('load', function(){
    loader.style.height= "100px";
    loader.style.width= "100px";
    loader.style.borderRadius = "50%";
    loader.style.visibility = "hidden";

});