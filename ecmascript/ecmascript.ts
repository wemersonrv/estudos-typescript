// let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio){
  let acao = 'Colocar o casaco!'
  console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf =  '789.101.132-78'
console.log(cpf)

var segredo = 'externo!'
function revelar(){
  const segredo = 'interno'
  console.log(segredo)
}
revelar()
console.log(segredo)

{
  {
    const def = 'def'
    console.log(def)
  }
}

for(let i = 0; i<10; i++){
  console.log(i)
}
// console.log(i)

// Arrow function
// const somar = function(n1: number, n2: number): number{
function somar(n1: number, n2: number): number{
  return n1 + n2
}
console.log(somar(2,2 ))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log("Olá")
saudacao()

const falarCom = (pessoa: string) => console.log( 'Ola ' + pessoa)
falarCom('Joao')

// this

// function normalComThis(){
//   console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis
//   .bind({nome: 'Ana'})
// normalComThisEspecial()

// // this ???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis
//   .bind({nome: 'Ana'})
// arrowComThisEspecial()



// Parâmetro padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio -5): void {
  console.log(inicio)
  while (inicio > fim){
    inicio--
    console.log(inicio)
  }
  console.log('fim')
}
contagemRegressiva()
contagemRegressiva(3)

// **** Rest & Spread ***
// 1. Spread
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', ...turmaA, 'Miguel', 'Lorena']
console.log(turmaB)

// 2. Rest
function retornaArray(...args: number[]): number[] {
  return args
}

const numeros = retornaArray(1, 2, 3, 4, 5, 6)
console.log(numeros)
console.log(retornaArray(...numbers))

// Rest & Spread ( Tupla )
const tupla: [number, string, boolean] = [1, 'abc', false]
function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`(1) ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(Array.isArray(params))
  console.log(`(2) ${params[0]} ${params[1]} ${params[2]}`)
}
tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
  nome: 'SSD 480GB',
  preco: 200,
  caracteristicas: {
    w: 'Importado'
  }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const {nome: n, preco: p, caracteristicas: { w }} = item
console.log(n)
console.log(p)
console.log(w)

// Template string
const usuarioId: string = 'SuporteCod3r'
const notificacoes: string = '19'
// const boasVindas = 'Boas Vindas ' + usuarioId + 
//   ' Notificações: ' + notificacoes
const boasVindas = `
  Boas vindas ${usuarioId},
  NOtificacoes: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)
console.log(`${(1 + 1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)

// Desafios

// Exercício 1
// var dobro = function(valor) {
//   return valor * 2
// }
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// Exerício 2
// var dizerOla = function (nome) {
//   if(nome === undefined) { nome = 'Pessoa'}
//   console.log('Olá, ' + nome)
// }
const dizerOla = function(nome: string = 'Pessoa'): void {
  console.log('Olá, ' + nome)
}
dizerOla()
dizerOla('Ana')

// Exercício 3
// var nums = [-3, 33, 38, 5]
// console.log('???')
const nums = [-3, 33, 38, 5]
// Imprimier o menor valor
console.log(Math.min(...nums))

// Exercício 4
// var array = [55, 20]
const array = [55, 20]
// Adeicionar todos os elementos de "numms" em array
array.push(...nums)
console.log(array)

// Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var nota1 = notas[0]
// var nota2 = notas[1]
// var nota3 = notas[2]
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// Exercício 6
const cientista = { primeiroNome: 'Will', experiencia: 12}
// const primeiroNome = cientista.primeiroNome
// const experiencia = cientista.experiencia
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)

// Callback
// function esperar3s(callback: (dado: string) => void){
//   setTimeout(() => {
//     callback('4s depois...')
//   }, 4000)
// }

// esperar3s(function(resultado: string){
//   console.log(resultado)
// })

// function esperar3sPromise(){
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve('promise: 3s depois...')
//     }, 3000)
//   })
// }

// esperar3sPromise()
//   .then(dado => console.log(dado))

  // fetch('https://swapi.dev/api/people/1')
  //   .then(responsePeople => responsePeople.json())
  //   .then(personagem => personagem.films)
  //   .then(films => fetch(films[1]))
  //   .then(responseFilm => responseFilm.json())
  //   .then(filme => console.log(filme.title))
  //   .catch(err => console.log('Catch!!! ' + err))
