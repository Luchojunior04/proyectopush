
const lista = ['aire', 'acondicionado', 'guanabana', 'mandarina', 'computador']

const contenido = document.getElementById('contenido')
const forEachBtn = document.getElementById('forEachBtn')
const resetBtn = document.getElementById('resetBtn')

function actualizarHTML() {
    let resultHTML = ''
    lista.forEach((value, index) => {
        //resultHTML += '<span id=\'forEach' + index + '\'>' + value + '</span>';
        resultHTML += `<span id="forEach${index}">${value}</span>`

    })
    contenido.innerHTML = resultHTML
}




function miFuncionforEach(){
    console.log(lista);
    lista.forEach((value, index) => {
        const elemento = document.getElementById(`forEach${index}`)

        setTimeout(() => {
        elemento.classList.add("selected")
        }, 2000 * index)

        setTimeout(() => {
            elemento.classList.remove("selected")
        }, 2000 * (index + 1))
    });
}


function miFuncionReset(){
    const lista = ['aire', 'acondicionado', 'guanabana', 'mandarina', 'computador']
    console.log(lista);
    actualizarHTML()
}



actualizarHTML();
forEachBtn.addEventListener('click', miFuncionforEach)
resetBtn.addEventListener('click', miFuncionReset)





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