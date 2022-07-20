var jogador1 = 11
var jogador2 = 2
var placar

// If Ternário
// Condição ? intrução: intrução
jogador1 > -1 && jogador2 > -1
  ? console.log('Jogo válido')
  : console.log('Erro, zere tudo')

if (jogador1 > 0 && jogador2 < jogador1) {
  console.log('Jogador 1 marcou')
  placar = jogador1 > jogador2
} else if (jogador2 > 0 && jogador1 < jogador2) {
  console.log('jogador 2 marcou')
  placar = jogador2 > jogador1
} else {
  console.log(`Empate`)
}

// Switch/Case

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log('jogador1 ganhou hein')
    break
  case (placar = jogador1 < jogador2):
    console.log('Jogador2 ganhou haha')
    break
  default:
    console.log('Ninguém ganhou')
}
