const botaoDeleta = () => {
    const botaoDeletar = document.createElement('button')

    botaoDeletar.classList.add('delete-button')
    botaoDeletar.innerHTML = '❌'
    botaoDeletar.addEventListener('click', deletarTarefa)

    return botaoDeletar
}

const deletarTarefa = (evento) => {

    const botaoDeletar = evento.target

    const tarefaCompleta = botaoDeletar.parentElement.parentElement

    tarefaCompleta.remove()

    return botaoDeletar
}

export default botaoDeleta