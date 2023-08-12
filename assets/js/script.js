const ele = document.getElementById("ele1")

function pintar(c = 'green'){
event.target.style.backgroundColor = c
}

ele.addEventListener("click", function(){
    pintar('yellow')
});
