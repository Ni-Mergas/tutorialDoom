// SELECCIONAR ELEMNTOS NECESARIOS DEL HTML

const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea(){
    if(input.value){
        // CREAR TAREA
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        // TEXTO INGRESADO POR EL USUARIO
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // CREAR Y AGREGAR CONTENEDOR DE ICONOS
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        //CREAR ICONOS
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill','icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill','icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar,eliminar);

        //AGREGAR TAREA A LA LISTA

        listaDeTarea.appendChild(tareaNueva);
    }else{
        alert('Por favor ingresa una tarea.')
    }
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}
function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown',(e) => {
    if(e.key === 'Enter'){
        agregarTarea();
    }
})