console.log('Hello Word')

// Pegando o span
var currentNumberwrapper = document.getElementById('currentNumber')

// Inicializando o span como zero, ou seja, pegando o zero como valor zero para a monipulação.
var currentNumber = 0

// Função incremento
// e após pego o html para a alteração.
function increment() {
  currentNumber = currentNumber + 1
  currentNumberwrapper.innerHTML = currentNumber
}
// Funcação decremento

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberwrapper.innerHTML = currentNumber
}
