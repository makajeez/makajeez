//show the menu

// function showMenu() {
//     var toggle = document.getElementById("mobileMenu");

//     if (toogle.style.height == "0px") {
//         toggle.style.height = "20px";
//     }
// }

function myFunction() {
    var x = document.getElementByClassName("nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}