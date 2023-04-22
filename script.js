const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLUJO = document.getElementById('flu');
const MANTENIMIENTO = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
  const PESO = document.getElementById('peso').value
  if (PESO > 0){
    ERROR.style.display = 'none'
    let flujo = calcFlujo(PESO);
    let mantenimiento = flujo*1.5;
    FLUJO.innerHTML = flujo + ' cc/hr';
    MANTENIMIENTO.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
    FLUJO.style.display = 'block';
    MANTENIMIENTO.style.display = 'block';
} else {
    ERROR.style.displaY = 'none'
}

function calcFlujo(peso) {
  let resto = peso;
  let flujo = 0;
  if (resto>20){
      let aux = resto-20;
      flujo += aux*1;
      resto -= aux;
  } 
  if (resto>10){
      let aux = resto-10;
      flujo += aux*2;
      resto -= aux;
  }
  flujo += resto*4;
  return flujo;
}
})