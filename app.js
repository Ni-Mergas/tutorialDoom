const lista = document.getElementById('lista');

const arrayItem = ['Item 1', 'Item 2', 'Item 3']

const fragment = document.createDocumentFragment()

arrayItem.forEach(item=>{
    const li = document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
})

lista.appendChild(fragment);
