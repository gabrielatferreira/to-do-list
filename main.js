import botaoConclui from './componentes/conclui.js'
import botaoDeleta from './componentes/deleta.js'

    const listContainer = document.querySelector('[data-lists]');
    const newListForm = document.querySelector('[data-new-list-form]');
    const newListInput = document.querySelector('[data-new-list-input]');

    let lists = [];

    newListForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return

    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
    })

    function createList(name) {
        return {id: Date.now().toString(), name: name }
    }

    function render() {
        clearElement(listContainer)
        lists.forEach(function(list) {
            const divContent = document.createElement('div')
            const divButtons = document.createElement('div')
            const item = document.createElement('li')
            item.classList.add('item')
            divContent.classList.add('div-content')
            divButtons.classList.add('div-buttons')
            divContent.innerText = list.name
            listContainer.appendChild(item)

            item.appendChild(divContent)
            item.appendChild(divButtons)
            divButtons.appendChild(botaoConclui())
            divButtons.appendChild(botaoDeleta())
            listContainer.appendChild(item)

        })
    }

    function clearElement(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

render();