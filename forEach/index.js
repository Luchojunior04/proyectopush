
const lista = ['aire', 'acondicionado', 'guanabana', 'mandarina', 'computador']

const contenido = document.getElementById('contenido')
const resetBtn = document.getElementById('resetBtn')
const forEachBtn = document.getElementById('forEachBtn')

function actualizarHTML() {
    let resultHTML = ''
    lista.forEach((value, index) => {
        //resultHTML += '<span id=\'forEach' + index + '\'>' + value + '</span>';
        resultHTML += `<span id= 'forEach'${index}'>${value}</span>`

    })
    contenido.innerHTML = resultHTML
}

function miFuncionforEach(){
    console.log(lista);
    lista.forEach(() => {});
    actualizarHTML();
}


function miFuncionReset(){
    const lista = ['aire', 'acondicionado', 'guanabana', 'mandarina', 'computador']
    console.log(lista);
    actualizarHTML()
}



actualizarHTML();
resetBtn.addEventListener('click', miFuncionReset)
forEachBtn.addEventListener('click', miFuncionforEach)





//lista.forEach((value, index) => {
    //console.log('valor:' + value);
    //console.log('Indice' +  index);
    //console.log();
//})

//for (let i = 0; i < lista.length; i++){
    //const value = lista[i];
    //console.log('valor:' + value);
    //console.log('Indice' +  index);
    
//}






//function suma (a, b){
    //return a + b
    //}

    //setTimeout(() => {
        //console.log("hola mundo")

    //}, 1000)