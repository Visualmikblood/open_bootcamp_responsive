const btnMenu = document.querySelector(".menu_con_tres_rayitas");
const menu = document.querySelector(".nav");

btnMenu.addEventListener("click", function(){
    menu.classList.add("mostrar");
});


const x = document.querySelector(".x");

x.addEventListener("click", function(){
    menu.classList.remove("mostrar");
});