const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")

function pintar(e, c = 'black'){
    ele=document.querySelector('#'+e);
    ele.style.backgroundColor = c
}

a.addEventListener("click", function(){
    pintar('a')
});
b.addEventListener("click", function(){
    pintar('b')
});
c.addEventListener("click", function(){
    pintar('c')
});
d.addEventListener("click", function(){
    pintar('d')
});
