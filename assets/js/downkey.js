let colorActual = 'white'

function pintar(e){
    ele=document.getElementById(e);
    ele.style.backgroundColor = colorActual
}

function crearDiv(){
    var nuevoDiv = document.createElement("div");
    nuevoDiv.id = "key";
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = colorActual;
    nuevoDiv.style.border = "2px solid black";
    document.body.appendChild(nuevoDiv);
}

document.addEventListener('keydown', function (event) {
    if (event.key == 'a') {
        colorActual = 'pink'
        pintar('key')
    } 
    if (event.key == 's') {
        colorActual = 'orange'
        pintar('key')
    }
    if (event.key == 'd') {
        colorActual = 'lightblue'
        pintar('key')
    } 
    if (event.key == 'q') {
        colorActual = 'purple'
        crearDiv()
    } 
    if (event.key == 'w') {
        colorActual = 'gray'
        crearDiv()
    }
    if (event.key == 'e') {
        colorActual = 'brown'
        crearDiv()
    } 
})