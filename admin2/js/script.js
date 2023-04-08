//change navbar styles on scroll


window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("window-scroll",window.scrollY> 0);

});

//show nav menu
const menu = document.querySelector(".nav-menu");
const menuBar = document.querySelector("#open-menu-btn");
const closeBar = document.querySelector("#close-menu-btn");

menuBar.addEventListener("click",() =>{
    menu.style.display='flex';
    closeBar.style.display = "inline-block";
    menuBar.style.display = "none";
})

//close nav menu

const closeNav = () =>{
    menu.style.display = "none";
    menuBar.style.display = "inline-block"
    closeBar.style.display = "none"

};
closeBar.addEventListener("click", closeNav)
