/* toggle style switcher */
const cambioxd = document.querySelector(".style-switcher-toggler")
cambioxd.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){

        document.querySelector(".style-switcher").classList.remove("open")
    }
})


const alternarColores = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternarColores.forEach((style) =>{
        if(color == style.getAttribute("title")){   
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}


const diaNoche = document.querySelector(".day-nigth");

diaNoche.addEventListener("click",()=>{
    diaNoche.querySelector("i").classList.toggle("fa-sun")
    diaNoche.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        diaNoche.querySelector("i").classList.add("fa-sun")
    }
    else{
        diaNoche.querySelector("i").classList.add("fa-moon")
    }
})