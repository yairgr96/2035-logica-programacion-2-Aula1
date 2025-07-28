/* 
Practica de JavaScript:
1. Selecciona un elemento del DOM y cambia su contenido.
2. Crea una función que reciba un selector y un texto, y cambie el contenido del elemento seleccionado.
3. Utiliza la función para cambiar el contenido de un elemento h1 y un párrafo.


let titulo = document.querySelector('h1');

// Selecciona el elemento h1 y cambia su contenido
/* titulo.textContent = 'Hola Mundo desde JavaScript'; 
//titulo.innerHTML = 'Juego de número secreto';

let parrafo = document.querySelector('p');
parrafo.textContent = 'Adivina el número entre 1 y 10';
 */

// Selecciona un elemento del DOM y cambia su contenido
// Crea una función que reciba un selector y un texto, y cambie el contenido
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Utiliza la función para cambiar el contenido de un elemento h1 y un párrafo
asignarTextoElemento('h1', 'Juego de número secreto');
asignarTextoElemento('p', 'Adivina el número entre 1 y 10');


let numeroSecreto = generaNumeroSecreto();
console.log(numeroSecreto);

function generaNumeroSecreto(params) {  
    return Math.floor(Math.random() * 10) + 1;
}