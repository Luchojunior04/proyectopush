let elementos = ['yuca', 'papa', 'limon', 'curcuma', 'ajo'];

const contenedor = document.getElementById('contenido');
 function actualizarHTML() {
    let resultHTML = '';
  for (let i = 0; i < elementos.length; i++) {
    resultHTML += '<span>' + elementos[i] + '</span>'; 
  }
  contenedor.innerHTML = resultHTML
}

const resetButton = document.getElementById('resetBtn');
const popButton = document.getElementById('popBtn');
const shiftButton = document.getElementById('shiftBtn');

function miFuncionPop() {
    console.log(elementos);
    elementos.pop();
    actualizarHTML()

}

function miFuncionShift() {
    console.log(elementos);
    elementos.shift();
    actualizarHTML()

}



function miFuncionReset() {
    elementos = ['yuca', 'papa', 'limon', 'curcuma', 'ajo'];
    console.log(elementos);
    actualizarHTML()

}


actualizarHTML();
shiftButton.addEventListener('click', miFuncionShift);
popButton.addEventListener('click', miFuncionPop); 
resetButton.addEventListener('click', miFuncionReset);