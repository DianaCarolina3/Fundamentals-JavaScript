function HeredaDe(prototipoHijo , prototipoPadre) {
  let noop = function () {}
  noop.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new noop
  prototipoHijo.prototype.constructor = prototipoHijo
}
//persona y dessarrollador son personas constructoras

function persona (nombre, apellido, edad, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.altura = altura
}
persona.prototype.alturaPersona = function() {
  if(this.altura >= 1.8) {
    console.log(`${this.nombre} ${this.apellido} tu eres alto`)
  } else {
    console.log(`${this.nombre} ${this.apellido} tu eres bajo`)
  }
}
persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}


function desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

HeredaDe(desarrollador , persona)

desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}


// let camilo = new persona('Camilo' ,'Listsi', 25 , 1.75)
// let jose = new persona('Jose','Higuita', 38, 1.80)
// let maria = new persona('Maria','Builes',95, 1.85)
// let diana = new persona('Diana','Garzon',84 , 1.60)

// let camilo = new desarrollador('Camilo' ,'Listsi')
// let jose = new desarrollador('Jose','Higuita')
// let maria = new desarrollador('Maria','Builes')
// let diana = new desarrollador('Diana','Garzon')



