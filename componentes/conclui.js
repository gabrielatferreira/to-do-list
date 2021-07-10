const botaoConclui = () => {
    const botaoConcluir = document.createElement('button')

    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = '✔️'
    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir
}

const concluirTarefa = (evento) => {
    
    const botaoConcluir = evento.target

    const tarefaCompleta = botaoConcluir.parentElement.parentElement.firstChild
    console.log(tarefaCompleta)

    tarefaCompleta.classList.toggle('done')
}

export default botaoConclui