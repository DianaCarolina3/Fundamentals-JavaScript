var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 182
}

let personas = [sacha,alan,martin,dario,vicky,paula]

const personaAlta = persona => persona.altura >= 1.80
const personaBaja = persona => persona.altura <= 1.60
let personasAlturaAlta = personas.filter(personaAlta)
let personasAlturaBaja = personas.filter(personaBaja)
console.log(personasAlturaAlta)
console.log(personasAlturaBaja)
const alturaPersonas = persona => persona.altura
let alturaPersona = personas.filter(alturaPersonas)
console.log(alturaPersona)


// map es dar un nuevo arreglo de datos, (en este caso un nuevo array con altura en cms)

//modifica todo el array original
// const alturaACms = persona => persona.altura *= 100
// let personaAlturaEnCms = personas.map(alturaACms)
// console.log(personaAlturaEnCms)

// nuevo objeto, pero no modifica el array original
// const alturaACms = persona => {
//   return {
//     ...persona,
//     altura: persona.altura * 100
//   }
// }
//otra forma de nuevo objecto
const alturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

let personaAlturaEnCms = personas.map(alturaACms)
console.log(personaAlturaEnCms)


// Total libros de personas
// let acum = 0
// for(var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }
// console.log(acum)

//otra forma de total libros
//reduce = es un acumulador de un array y da el valor total de la acumulacion
const reducer = (acum , persona) => acum + persona.cantidadDeLibros
let totalLibrosPersonas = personas.reduce(reducer, 0)
console.log(totalLibrosPersonas)

//saludar personas
const saludarPersonas = persona => console.log(`Hola ${persona.nombre}`)
for(var i = 0; i < personas.length; i++) {
  saludarPersonas(personas[i])
}

//total alturas sumadas
const acumAlturas = (acum , persona) => acum + persona.altura
let totalAlturasPersonas = personas.reduce(acumAlturas, 0)
console.log(totalAlturasPersonas)
