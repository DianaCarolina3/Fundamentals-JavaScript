// var name = "Ana" , apellido = "Casas"

// var str = name.substr(0, 2)
// var nameUppercase = name.toUpperCase()
// var nameLowercase = name.toLowerCase()
// var nameLength = name.length
// var letter = apellido.charAt(2)


// var precioVino = 200.3
// var total = Math.round(precioVino * 100 * 3) / 100;
// // # decimales que coge
// var totalStr = total.toFixed(2)
// console.log(total)



// var estudents = ['Camilo', 'Jose' ,'Maria', 'Juliana', 'Stheven', 'Shajir']
// function greetStudents(estudent) {
//   console.log(`Hola ${estudent}`)
// }
// for(var i = 0; i < estudents.length; i++) {
//   greetStudents(estudents[i])
// }

// var objects = ['cama','silla','puerta','carro','reloj','teclado','mesa','computador','mouse']
// function seeObjects(objects) {
//   console.log(`En tu casa tienes una ${objects}`)
// }
// for(var i = 0; i < objects.length; i++) {
//   seeObjects(objects[i])
// }


var objectsPersons = [
    person = {
    nombre: ['stheven'],
    cosa: ['carro'],
    edad:  [23],
    dislike: ['tomate', 20]
  },person = {
    nombre: ['Juan'],
    cosa:['moto'],
    edad: [18],
    dislike: ['tomate', 24]
  },person = {
    nombre: ['Maria'],
    cosa: ['mesa'],
    edad: [15],
    dislike: ['yuca', 85]
  },person = {
    nombre: ['Juliana'],
    cosa: ['carro'],
    edad: [18],
    dislike: ['limon', 56]
  }
]



// se coloca n para no modificar la variable global en la continuidad del codigo
// var nombre = 'Diana Carolina'
// function nombreMayuculas(n) {
//   n = n.toUpperCase()
//   console.log(n)
// }
// nombreMayuculas(nombre)


var dario = {
  nombre: 'Dario',
  apellido: 'Yousue',
  edad: 32
}
var jose = {
  nombre: 'Jose',
  apellido: 'Niquel',
  edad: 57
}
// function nombreEnMayucula(persona) {
//   console.log(persona.apellido.toUpperCase())
// }
// // tambien se puede escribir
// function nombreEnMayucula({ nombre }) {
//   console.log(nombre.toUpperCase())
// }
// nombreEnMayucula({ nombre: 'pepito' })

// function nombreEnMayucula(persona) {
//   // var nombre = persona.nombre
//   var { nombre } = persona
//   console.log(nombre.toUpperCase())
// }
// nombreEnMayucula(jose)
// nombreEnMayucula(dario)

function edadyNombre(persona) {
  var { nombre, edad } = persona
  console.log(`Hola me llamo ${nombre} y mi edad es ${edad} años`)
}
edadyNombre(dario)
edadyNombre(jose)

// // nuevo object en global
function cumpleanos(persona, nombre) {
  persona.edad += 1
  console.log(`${persona.nombre.toUpperCase()}: feliz cumpleaños! ahora tienes ${persona.edad} años`)
}
cumpleanos(dario)
cumpleanos(jose)

// nuevo objeto solo modifica en local
// function cumpleanos(persona) {
//   return {
//     ...persona,
//     edad: persona.edad + 1
//   }
// }
