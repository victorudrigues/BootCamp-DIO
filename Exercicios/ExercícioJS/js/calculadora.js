// Pegando a entrada do usuário
function calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - divisão real (/)\n 5 - Disisão Inteira (%)\n 6 - Potenciação (**)'
    )
  )

  // Verificar se  a operação é válida, ou seja, escolher somente de 1 á 6.
  // Else executa a caulculadora normal
  if (!operacao || operacao >= 7) {
    alert('Operação inválida')
    calculadora()
  } else {
    // Primeiro valores a darem entradas
    let n1 = Number(prompt('Entre com seu primeiro valor: '))
    let n2 = Number(prompt('Entre com seu segundo valor: '))
    let resultado

    // Verificação dos valores n1 e n2
    // Else faz com que  rode as operações normais
    if (!n1 || !n2) {
      alert('Parâmetros Inválidos')
      calculadora()
    } else {
      //Função Soma
      function soma() {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
      }
      // Funcao subtracao
      function subtracao() {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao()
      }
      // Funcao multiplicacao
      function multiplicacao() {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
      }
      // Funcao divisaoReal
      function divisaoReal() {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
      }
      // Funcao divisaoInteira
      function divisaoInteira() {
        resultado = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} é igual à ${resultado}`)
        novaOperacao()
      }
      // Funcao Potenciacao
      function potenciacao() {
        resultado = n1 ** n2
        alert(`${n1} elevado á ${n2} é igual a ${resultado}`)
        novaOperacao()
      }
    }
    // Funcao para nn ficar fazendo refresh na pag
    // - Jogo a  opcao para ser tratada após o usuário informar os dados
    // - se for 1, chamo a calculadora novamente
    // - Se for 2, encerro
    // - Qualquer outro valor chamo a função novamente..fd
    function novaOperacao() {
      let opcao = prompt(' Deseja fazer outra alteração? \n 1 - Sim\n 2 - Não')
      if (opcao == 1) {
        calculadora()
      } else if (opcao == 2) {
        alert('Obrigado e até mais')
      } else {
        alert('Erro, digite um número válido')
        novaOperacao()
      }
    }

    // // Criando um verificador de entrada
    // if (operacao == 1) {
    //   soma()
    // } else if (operacao == 2) {
    //   subtracao()
    // } else if (operacao == 3) {
    //   multiplicacao()
    // } else if (operacao == 4) {
    //   divisaoReal()
    // } else if (operacao == 5) {
    //   divisaoInteira()
    // } else if (operacao == 6) {
    //   potenciacao()
    // }

    switch (operacao) {
      case 1:
        soma()
        break
      case 2:
        subtracao()
      case 3:
        multiplicacao()
      case 4:
        divisaoReal()
      case 5:
        divisaoInteira()
      case 6:
        potenciacao()
    }
  }
}
calculadora()
