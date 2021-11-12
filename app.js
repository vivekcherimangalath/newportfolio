const openMenu = document.querySelector(".openmenu");
const closeMenu = document.querySelector(".closemenu");
const mainMenu = document.querySelector(".mainmenu");


openMenu.addEventListener("click",open);
closeMenu.addEventListener("click",close);


function open(){

    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";

}

function close(){
    mainMenu.style.top = "-100%";
}

