//para agarrar el parrafo normal
// const p = document.querySelector('p');

//para agarrar el parrafo con clase
// const parrafito = document.getElementsByClassName('parrafito');

//para agarrar el parrafo con id
// const pid = document.getElementById('pid');

// console.log({
//     h1, p, parrafito, pid, input,
// });

//sirve para modificar el h1 en el html
//h1.innerText="Parrafito Feo"

//para llamar la clase en la consola
// console.log(h1.getAttribute('class'));
//Modificar clases desde JS
// h1.setAttribute('class', 'rojo')

//para añadir clase
// h1.classList.add('rojo')
//para remover una clase
// h1.classList.remove('verde')

//para modificar el valor del input
// input.value = "456"

//crea la etiqueta <img> dentro del html
// const img = document.createElement('img');

// img.setAttribute('src', 'https://www.moto1pro.com/sites/default/files/yamaha_yzf-1000-r1-m-2020-1.jpg');

//borra lo que este dentro del pid para luego insertar la imagen
// pid.innerHTML=''
//para insertar en el html la imagen, luego del parrafo con id
// pid.appendChild(img);

//para agarrar el h1 normal
const h1 = document.querySelector('h1');
//para agarrar el input con id
const input1 = document.querySelector('#calculo1');
//para agarrar el input con id
const input2 = document.querySelector('#calculo2');
//para agarrar el boton con id
const btn = document.querySelector('#btnCalcular');
const pResult = document.getElementById('result')
const form = document.getElementById('form')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaImputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "El resultado es: " + sumaImputs;
}
