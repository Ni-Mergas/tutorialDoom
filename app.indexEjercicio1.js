const container = document.querySelector('.container')
const span = document.getElementById('span')
container.addEventListener('click',(e)=>{

   if(e.target.classList.contains('btn-primary')){
     span.textContent = "Hola desde Doom";
   }
   if(e.target.classList.contains('btn-danger')){
    span.textContent = "Hola desde HTML"
   }   
})
