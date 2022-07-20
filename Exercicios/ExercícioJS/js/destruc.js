// Destruturação

const pessoa = {
  nome: 'victor',
  age: 12,
  adress: {
    local: 'Aracapé',
    numero: 76
  }
}

var pessoa1 = pessoa.nome
console.log(pessoa1)

// Destruração
// {Propriedade} = Objeto
var { nome, age } = pessoa

console.log(nome, age)
