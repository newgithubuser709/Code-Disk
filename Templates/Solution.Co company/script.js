let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// navigation on ul 

var ul = document.querySelector('.nav-ul');
var burger = document.querySelector('.burger');
var cross = document.querySelector('.cross');
var nav = document.querySelector('.nav');

cross.style.display = 'none'


function menutoggle() {
    ul.classList.add('show');
    burger.style.display = 'block'
    if (ul.classList.contains('show')) {
        cross.style.display = 'block';
        burger.style.display = 'none';
    }

}

function menutoggle2() {
    ul.classList.remove('show');
    burger.style.display = 'block';
    cross.style.display = 'none'

}

function menutoggleclose() {
    ul.classList.remove('show');
    burger.style.display = 'block';
    cross.style.display = 'none'

}