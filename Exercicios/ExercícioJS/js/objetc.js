const pessoa = {
  nome: 'Victor',
  age: 22,
  andress: {
    local: 'Aracapé',
    numero: 76
  }
}

console.log(pessoa.andress.numero)
console.log(typeof pessoa)

var adress = pessoa.andress
console.log(adress)
