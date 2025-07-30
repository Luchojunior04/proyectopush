let eliminados = []


function eliminarUltimoNombre() {
  const textarea = document.getElementById("nombres")

  let nombres = textarea.value.trim().split(','); // trim: sirve para eliminar los espacios en blanco desde el principio y final de una cadena.
  //split divide una cadena en partes, usando un separador, y devuelve un arreglo.

  if (nombres.length > 0) {
    let eliminado = nombres.pop(); //elimina el ultimo nombre dentro del elemento

    eliminados.push(eliminado); // guarda los elementos eliminados en la variable (elminados)
    textarea.value = nombres.join(','); // join une elementos de una lista o arreglo en una sola cadena
  }
}

function agregarUltimoNombre() {
  const textarea = document.getElementById("nombres")

  if (eliminados.length > 0) {
    let recuperado = eliminados.pop();
    let nombres = textarea.value.trim();

    if (nombres) {
      textarea.value = nombres + ',' + recuperado;
    } else {
      textarea.value = recuperado;
    }
  }
}

// let elementos = ['kiwi', 'pera', 'guanabana', 'pomelo']

//const contenedor = document.getElementById('elements')
//function actualizarHTML(){
  //let resultHTML = ''
 // for( let i = 0; i < elementos.length; i++) {
 //resultHTML += '<span>' + elementos[i] + '</span>'
 //}
//}

// const resetButton = document.getElementById("resetBtn")
//const resetButton = document.getElementById("popBtn")

// function miFuncionDePop() {
     //console.log('Estoy haciendo array.pop()')
     //console.log(elementos)
    //elementos.pop()
//}

// function miFuncionDeReseteo() {
//      elementos = ['kiwi', 'pera', 'guanabana', 'pomelo']
     //console.log('Estoy reseteando algo...')
     //console.log(elementos)
//}

//actualizarHTML()
//PopButton.addEventlistener('click', miFuncionDePop)
//resetButton.addEventlistener('click', miFuncionDeReseteo)