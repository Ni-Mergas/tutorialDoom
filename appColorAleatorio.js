// SELECCIONAR LOS ELEMENTOS DEL DOM

const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorAleatorio(){
    let digitos ='0123456789ABCDEF';
    let colorHexa = '#';

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHexa += digitos[indiceAleatorio];
    }

    return colorHexa;

}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorAleatorio();
    // Actualizar texto
    color.textContent = colorAleatorio
    // Actualizar color aleatorio
    document.body.style.backgroundColor = colorAleatorio;
})