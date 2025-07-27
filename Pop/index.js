let eliminados = [ ]


function eliminarUltimoNombre() {
    const textarea = document.getElementById("nombres")

    let nombres = textarea.value.trim().split(',');
    
    if(nombres.length > 0) {
    let eliminado = nombres.pop();
    
    eliminados.push(eliminado);
    textarea.value = nombres.join(',');
  }   
}

function agregarUltimoNombre() {
    const textarea = document.getElementById("nombres")

    if(eliminados.length > 0) {
       let recuperado = eliminados.pop();
       let nombres = textarea.value.trim();

       if(nombres) {
        textarea.value = nombres + ',' + recuperado;
       } else {
        textarea.value = recuperado;
       }
    }
}
