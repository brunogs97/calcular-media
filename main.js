const formulario = document.querySelector('#formulario')
const btnCalcularMedia = document.querySelector('#btn-calcular')
const cxAvisoMedia = document.querySelector('.mostrar-media')
const cxParecerAluno = document.querySelector('.parecer-aluno')
const aviso = document.querySelector('.aviso')
const btnLimpar = document.querySelector('#btn-limpar')

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
        
    if(mediaFinal >= 7) {
        situacaoFinal = 'Aprovado'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado'
    } else {
        situacaoFinal = 'Recuperação'
    }

    return situacaoFinal 
}

function formatarSituacao(situacaoFinal) {
    switch(situacaoFinal) {
        case 'Aprovado':
            cxParecerAluno.classList.remove('reprovado')
            cxParecerAluno.classList.remove('recuperacao')
            cxParecerAluno.classList.add('aprovado')
            console.log('adicionar classe aprovado')
            break

        case 'Reprovado':
            cxParecerAluno.classList.remove('aprovado')
            cxParecerAluno.classList.remove('recuperacao')
            cxParecerAluno.classList.add('reprovado')
            console.log('adicionar classe reprovado')
            break

        case 'Recuperação':
            cxParecerAluno.classList.remove('aprovado')
            cxParecerAluno.classList.remove('reprovado')
            cxParecerAluno.classList.add('recuperacao')
            console.log('adicionar classe recuperacao')
            break
        
        default: 
        console.log('Situação indefinida')
    }
}

function validarNumero(numero) {
    const num1 = nota1.value
    const num2 = nota2.value

    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset() // limpar formulario
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(() => {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000)
    }
}

function limpar() {
    cxParecerAluno.classList.remove('aprovado')
    cxParecerAluno.classList.remove('reprovado')
    cxParecerAluno.classList.remove('recuperacao')
    cxAvisoMedia.textContent = ''
    cxParecerAluno.value = ''
}

btnLimpar.addEventListener('click', limpar)

btnCalcularMedia.addEventListener('click', (event) => {
    event.preventDefault();

    const nota1 = parseFloat(formulario.nota1.value)
    const nota2 = parseFloat(formulario.nota2.value)
    const media = calcularMedia(nota1, nota2)
    
    cxAvisoMedia.textContent = media
    cxParecerAluno.value = situacaoFinal(media)
    cxParecerAluno.textContent = formatarSituacao(situacaoFinal(media))
})

