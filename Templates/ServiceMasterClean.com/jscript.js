// ________________________________________________________________________________________________________

//   pre loader ______________ ___________ _________ _______ _____ ___ __ __ _ _ 

var body = document.getElementById('body');
var preloader = document.querySelector('.preloader');

function loading() {

    preloader.style.width = '0';
    preloader.style.opacity = '0';
    body.style.overflow = 'visible'

}

// ________________________________________________________________________________________________________


//  Chat-Box  ______________ ___________ _________ _______ _____ ___ __ __ _ _ 

var chatdiv = document.getElementById('chatdiv');
var closebtn = document.getElementById('closebtn');
var chatimg = document.querySelector('.img-to-open-chat-box');





function closechat() {

    chatdiv.style.height = '0px';
    chatdiv.style.width = '0px';
    chatdiv.style.opacity = '0';
    closebtn.style.display = 'none';
    chatimg.style.display = 'block';

}

function openchat() {

    chatdiv.style.height = '470px';
    chatdiv.style.width = '330px';
    chatdiv.style.opacity = '100';
    closebtn.style.display = 'flex';
    chatimg.style.display = 'none';

}

function sendmsg() {
    alert("Message Sent");

}


// ________________________________________________________________________________________________________


//  Responsive ul anim  ______________ ___________ _________ _______ _____ ___ __ __ _ _ 


var mobileul = document.getElementById('mobileul');
var burger = document.getElementById('burger');
var close = document.getElementById('close');


mobileul.style.height = '470px'
close.style.display = 'none';

function bars() {

    if (
        mobileul.style.height == '470px'
    )

    {
        mobileul.style.height = '471px'
        mobileul.style.left = '0'
        burger.style.display = 'none';
        close.style.display = 'block';

    }


}


function cross() {

    if (mobileul.style.height == '471px')

    {
        mobileul.style.height = '470px'
        burger.style.display = 'block';
        close.style.display = 'none';
        mobileul.style.left = '-100%'


    }

}

// ________________________________________________________________________________________________________