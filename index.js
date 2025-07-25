
let nombres = [ ]


const contenido = document.getElementById("contenido");
const input = document.getElementById("Objetos");

function agregarElementos(){
    if(input.value != ''){
        nombres.push(input.value)

        let resultado = ''
        for( let i = 0; i < nombres.length; i++){
            resultado += '<spam>' + nombres[i] + '</spam>'
        }
        contenido.innerHTML = resultado
    }
}
