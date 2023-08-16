// const lista = document.getElementById('lista');

// const arrayItem = ['Item 1', 'Item 2', 'Item 3']

// const fragment = document.createDocumentFragment()

// arrayItem.forEach(item=>{
//     const li = document.createElement('li')
//     li.textContent = item

//     const childNode = fragment.firstChild
//     console.log(item, childNode)
//     fragment.insertBefore(li, childNode)
// })

// lista.appendChild(fragment);


const lista = document.querySelector('#lista')

const arrayLista = ['Item 1', 'Item 2', 'Item 3']

const template = document.querySelector('#template-li').content
const fragment = document.createDocumentFragment()

arrayLista.forEach(item=>{
    template.querySelector('.list span ').textContent = item
    // template.querySelector('.text-danger').textContent = item // otra forma de ejecutar
    // template.querySelector('span').textContent = item // otra forma de acceder
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})
lista.appendChild(fragment)
 
// const fragment = document.createDocumentFragment()
// arrayLista.forEach(item=>{

//     const li = document.createElement('li') /*Creando la etiqueta li <li></li> */
//     li.classList.add('list')/*Se crea la clase lista*/
//     const b = document.createElement('b')/* Creando la etiqueta bold <b></b>*/
//     b.textContent = 'Nombre'/*Creando lo que se incluye en la etiqueta b */
//     li.appendChild(b)/*se empuja el contenido de la etiqueta de bold*/
//     const span = document.createElement('span')
//     span.classList.add('text-danger')
//     span.textContent = item
//     li.appendChild(span)
//     fragment.appendChild(li)
// })
// lista.appendChild(fragment);

//    Creando listas con innerHTML

// let fragment =''
// arrayLista.forEach(item=>{
//     fragment += `
//     <li class="list">
//         <b>Nombre: </b> <span class="text-danger">${item}</span>
//     </li>
//     `
// })
// lista.innerHTML = fragment;


