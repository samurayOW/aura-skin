'use strict';

const navbarBtn = document.querySelector('.navbar-btn');
const navMobile = document.querySelector('.nav-mobile');


// Navbar button
navbarBtn.addEventListener('click', function () {
    navMobile.classList.toggle('show-links');
});


// Date 
const date = (document.querySelector("#date").innerHTML = new Date().getFullYear());
