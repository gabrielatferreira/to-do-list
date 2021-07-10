let listsExternal = []

const botaoDeleta = (lists) => {
    listsExternal = lists
    const botaoDeletar = document.createElement('button')

    botaoDeletar.classList.add('delete-button')
    botaoDeletar.innerHTML = '❌'
    botaoDeletar.addEventListener('click', deletarTarefa)

    return botaoDeletar
}

const deletarTarefa = (evento) => {

    const botaoDeletar = evento.target

    const tarefaCompleta = botaoDeletar.parentElement.parentElement

    let itemEncontrado = null

    listsExternal.forEach((item, index) => {
        if (item.name == tarefaCompleta.firstChild.innerHTML) {
            itemEncontrado = index
        }
    })

    listsExternal.splice(itemEncontrado, 1)

    tarefaCompleta.remove()

    return botaoDeletar
}

export default botaoDeleta