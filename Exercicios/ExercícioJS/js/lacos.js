// Usa como uma repetiçao até que a condição seja falsa
// For(Expressão inicial; condição; incremento){
// Declaração
// }

let array = [1, 2, 3, 4, 5, 6, 7, 8, 10]

let pessoa = {
  a: 'oi',
  b: 'Tudo bem?',
  c: 'haha'
}

for (let i = 0; i < array.length; i++) {
  console.log(i)
}

// For in é uma repetição a partir de uma propriedade
// Estou passando por todas as propriedades
for (let j in pessoa) {
  console.log(j)
}
// Retorna string e nn número

// FOR OF é uma repetição a partir de um valor
for (let p of array) {
  console.log(p)
}
// Percorre o array até o fim e retorna todos os valores

// OBS: for of nn intera sobre OBJETOS
// Posso fazer dessa forma, porém irá imprimir o cada caractere em linhas separadas
// for (let k of pessoa.andress) {
//   console.log(k)
// }

// ******************* WHILE ***********************
// Executa uma instrução enquanto determinada condição é verdadeira, a verificação é feita ANTES da instrução
var a = 0
while (a < 10) {
  a++
  console.log(a)
}

// ******************* DO WHILE ***********************
// Executa uma instrução enquanto determinada condição é FALSA, a verificação é feita DEPOIS da instrução
var b = 0
do {
  b++
  console.log(b)
} while (b < 10)
