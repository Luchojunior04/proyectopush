


const contenido = document.getElementById("contenido");
const input = document.getElementById("Objetos");
const posicionResultado = document.getElementById("posicionResultado");

let elementos = [ 
    "Manzana",
    "perro",
    "guayaba",
    "melon",
    "banana",
    "pera",
];

function actualizarHTML() {
    let resultHTML = "";
    for(let i = 0; i < elementos.length; i++) {
        resultHTML += '<span>' + elementos[i] + '</span>';

    }
    contenido.innerHTML = resultHTML;
}
actualizarHTML();

function insertarElementos() {
    const posicion = elementos.indexOf(input.value);
    posicionResultado.innerText = posicion

}



//function insertarElementos(){
    //if(input.value != ''){
      //  nombres.push(input.value)

        //let span = document.createElement("span")
        //let content = document.createTextNode(input.value)

        //span.appendChild(content)
        //contenido.appendChild(span)
    //}
//}

function resetElementos(){
    elementos = []
    contenido.innerHTML = ""
}