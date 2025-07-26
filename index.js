
let nombres = [ ]


const contenido = document.getElementById("contenido");
const input = document.getElementById("Objetos");

function agregarElementos(){
    if(input.value != ''){
        nombres.push(input.value)

        let span = document.createElement("span")
        let content = document.createTextNode(input.value)

        span.appendChild(content)
        contenido.appendChild(span)
    }
}

function resetElementos(){
    elementos = []
    contenido.innerHTML = ""
}
