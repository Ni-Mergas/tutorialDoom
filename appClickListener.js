
// ----------- Primer Metodo -------------

// const btnAumentar = document.querySelector('.btn-primary')
// const btnDisminuir = document.querySelector('.btn-danger')
// const span = document.getElementById('span')
// let contador = 0;

// btnAumentar.addEventListener('click',()=>{
//     contador++
//     span.textContent = contador
// })

// btnDisminuir.addEventListener('click',()=>{
//     contador--
//     span.textContent = contador
// })


// ------------------------ Segundo Metodo ----------------

const container = document.querySelector('.container')
const span = document.getElementById('span')
let contador = 0

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-primary')){
        contador ++
        span.textContent = contador
    }
    if(e.target.classList.contains('btn-danger')){
        contador --
        span.textContent = contador
    }
    e.stopPropagation()             
})


