let listsExternal = []

const botaoConclui = (lists) => {
    listsExternal = lists
    const botaoConcluir = document.createElement('button')

    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = '✔️'
    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir
}

const concluirTarefa = (evento) => {

    const botaoConcluir = evento.target

    const tarefaCompleta = botaoConcluir.parentElement.parentElement.firstChild

    tarefaCompleta.classList.toggle('done')

    listsExternal.forEach(item => {
        if (item.name == tarefaCompleta.innerHTML) {
           item.toggle == "none" ? item.toggle = "done": item.toggle = "none"
        }
    })
}

export default botaoConclui