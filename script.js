const divs = document.querySelectorAll("div")

function logText(e){
    console.log(this.classList.value);
    //will the bubbling stop or not
    e.stopPropagation();
}

divs.forEach(div=>div.addEventListener("click", logText, {
    //is it going upside or downside
    capture:false,
    //should i run the event just ONCE ? 
    once: true

}))