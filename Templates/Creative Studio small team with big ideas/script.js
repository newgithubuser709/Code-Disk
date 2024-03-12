 var home = document.getElementById('home');
 var about = document.getElementById('about');
 var service = document.getElementById('service');
 var portfolio = document.getElementById('portfolio');
 var team = document.getElementById('team');
 var testimonial = document.getElementById('testimonial');
 var blog = document.getElementById('blog');
 var contact = document.getElementById('contact');
 var header = document.getElementsByClassName('.header');
 var last = document.getElementById('for-scroll-to-contact-div')
 var nav = document.getElementById('nav');
 var burger = document.getElementById('burger');
 var cross = document.getElementById('cross');
 var navul = document.getElementById('nav-ul');
 var logo = document.getElementById('logo');
 var preloader = document.getElementById('preloader');

 function load() {
     preloader.style.display = 'none';

 }



 function toggle1() {

     if (navul.style.height = '0px') {
         navul.style.height = '323px';
         burger.style.display = 'none';
         cross.style.display = 'block';
     }



 }

 function toggle2() {

     if (navul.style.height = '323px') {
         navul.style.height = '0px';
         burger.style.display = 'block';
         cross.style.display = 'none';
     }

 }

 function toggle12close() {

     navul.style.height = '0px';
     burger.style.display = 'block';
     cross.style.display = 'none';
 }


 window.onscroll = function() {

     if (window.pageYOffset >= logo.offsetTop) {
         nav.classList.add('sticky');



     } else {

         nav.classList.remove('sticky');


     }

     /* 
.......................................
navigation a (ancor tag) on scroll  animate start
....................................... */


     if (window.pageYOffset >= about.offsetTop) {
         nav.classList.add('second-color');



     } else {

         nav.classList.remove('second-color');
     }

     if (window.pageYOffset >= service.offsetTop) {
         nav.classList.add('third-color');



     } else {

         nav.classList.remove('third-color');
     }
     if (window.pageYOffset >= portfolio.offsetTop) {
         nav.classList.add('fourth-color');



     } else {

         nav.classList.remove('fourth-color');
     }
     if (window.pageYOffset >= team.offsetTop) {
         nav.classList.add('fifth-color');



     } else {

         nav.classList.remove('fifth-color');
     }
     if (window.pageYOffset >= testimonial.offsetTop) {
         nav.classList.add('sixth-color');



     } else {

         nav.classList.remove('sixth-color');
     }
     if (window.pageYOffset >= blog.offsetTop) {
         nav.classList.add('seventh-color');



     } else {

         nav.classList.remove('seventh-color');
     }

     if (window.pageYOffset >= last.offsetTop) {
         nav.classList.add('eighth-color');



     } else {

         nav.classList.remove('eighth-color');
     }

 }