
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

// obtener los elementos del texto para mostrar los valores de los inputs

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// establecer variables para especificar el valor del RGB en rango desde 0-255

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Reemplazamos el valor del texto desde el DOM pasandole el vlaor de las variables obtenidad del HTML
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// actualizar el VideoColorSpace, para cuando se cambian indicadores

function actualizarColor (rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// implementar eventlistener para cada uno de los colores para que modifique el color del fondo

// para actualizar rojo, se implementa un evento llamado change-cambio

inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo,verde, azul);
});

    // Actualizar color verde

inputVerde.addEventListener('change', (e) =>{
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
})

    // Actualizar color azul

inputAzul.addEventListener('change', (e) =>{
    inputAzul = e.target.value;
    textoVerde.innerText = azul;
    actualizarColor(rojo, verde, azul);
})



