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

    listsExternal.forEach(item => {
        if (item.name == tarefaCompleta.firstChild.innerHTML) {
            itemEncontrado = item
        }
    })

    listsExternal.splice(itemEncontrado)

    tarefaCompleta.remove()

    return botaoDeletar
}

export default botaoDeleta