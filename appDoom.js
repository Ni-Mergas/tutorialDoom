

                // EventHandler
// esto debe ir en el HTML es una opción para codigos estáticos
/* <li onclick="mostrarClic('Aceitunas')" class="topping fondo-marron" id="aceitunas">Aceitunas</li> */
// function mostrarClic(topping){
//     console.log(topping);
// }

                        // .addEventListener

const toppings = document.getElementsByClassName('topping');

// SE REEMPLAZA ESTA FUNCION, CON UNA FUNCION FLECHA    
// function mostrarClic(e){
//     console.log(e.target.innerText);
// }

for (const topping of toppings){
    topping.addEventListener('click', (e)=>{
        console.log(e.target.innerText);
    });
}