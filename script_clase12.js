const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
//en esta linea le decimos al codigo que queremos que nos coloque lo que nosotros pusimos como Calculo 1
//usamos el querySelector para indica lo que queremos. 
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
// colocamos el # para indicarle a JS con que cosa queremos trabajar 
const pResult = document.querySelector('#result');

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
  }
//aqui realizamos la funcion del cuando al boton se le de un click
//colocamos nuestra constante suma de inputs1 la cual nos realiza una concatenacion de nuestros inputs
//el input 1 e input 2, no olvidemos que no realiza una operacion matematica aun, sino una concatenacion.
