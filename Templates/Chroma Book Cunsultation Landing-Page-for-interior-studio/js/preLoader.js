let body = document.getElementById("body");
let preloader = document.getElementById("preloader");


body.style.overflow = "hidden";

window.onload = function() {

    body.style.overflow = "visible";
    preloader.classList.add("preloader-script");

}