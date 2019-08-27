window.onload = function(){
    window.onscroll = function(){
        navFunction();
    }
}

var navbar = document.getElementById("navbar");
var welcome = document.getElementById("welcome");
var locked = welcome.offsetTop;

function navFunction(){
    if (window.pageYOffset >= locked) {
        navbar.classList.remove("nav-hidden");
        navbar.classList.add("nav-locked");
        welcome.classList.remove("content-idle");
        welcome.classList.add("content-active");
      } 
    else {
        navbar.classList.remove("nav-locked");
        navbar.classList.add("nav-hidden");
        welcome.classList.remove("content-active");
        welcome.classList.add("content-idle");
    }
}