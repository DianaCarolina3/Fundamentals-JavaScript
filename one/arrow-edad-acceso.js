
let camilo = {
  nombre: 'Camilo',
  edad: 23
}
let yulian = {
  nombre: 'Yulian',
  edad: 17
}
let julieht = {
  nombre: 'Julieth',
  edad: 12
}
let ana = {
  nombre: 'Ana',
  edad: 56
}
const MAYOR_EDAD = 18
// function mayorDeEdad(persona) {
//   if (persona.edad >= MAYOR_EDAD) {
//     console.log(`${persona.nombre} tu eres mayor de edad`)
//   } else {
//     console.log(`${persona.nombre} tu eres menor de edad`)
//   }
// }
// mayorDeEdad(camilo)
// mayorDeEdad(jose)
// mayorDeEdad(julieht)
// mayorDeEdad(ana)

// oTRA FORMA es:
// const mayorDeEdad = function(persona) {
//   return persona.edad >= MAYOR_EDAD
// }

// function imprimirEdad(persona) {
//   if (mayorDeEdad(persona)) {
//     console.log(`${persona.nombre} tu eres mayor de edad`)
//   } else {
//     console.log(`${persona.nombre} tu eres menor de edad`)
//   }
// }

// Otra forma mas resumida es:
const mayorDeEdad = ({ edad }) => edad >= MAYOR_EDAD

function imprimirEdad(persona) {
  if (mayorDeEdad(persona)) {
    console.log(`${persona.nombre} tu eres mayor de edad`)
  } else {
    console.log(`${persona.nombre} tu eres menor de edad`)
  }
}

imprimirEdad(camilo)
imprimirEdad(yulian)
imprimirEdad(julieht)
imprimirEdad(ana)


function acceso(persona) {
  if (!mayorDeEdad(persona)) {
    console.log(`${persona.nombre} ACCESO DENEGADO`)
  }
}

acceso(camilo)
acceso(yulian)
acceso(julieht)
acceso(ana)


