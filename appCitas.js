    // OBTENER REFERENCIAS DE LOS OBJETOS DEL DOM

let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

    // FUNCIÓN PARA GENERAR UNA CITA ALEATORIA

function generarEnteroAleatorio(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}


    // FUNCION PARA CAMBIAR LA CITA

function cambiarCita(){

    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();


    // CAMBIAR LA CITA DESDE EL BOTON "CAMBIAR CITA"

botonElem.addEventListener('click',cambiarCita);
