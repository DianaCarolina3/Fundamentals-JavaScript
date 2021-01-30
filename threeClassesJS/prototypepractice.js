class empleado {
  constructor(nombre, apellido, estado) {
  this.nombre = nombre
  this.apellido = apellido
  this.estado = estado
  }

  saludar(fn) {
    var { nombre,apellido,estado } = this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy ${estado}`)
    if (fn){
      fn(nombre,apellido, false)
    }
  }
}

class desempleado extends empleado {
  constructor(nombre,apellido,estado) {
    super(nombre,apellido,estado)
  }

  saludar (fn) {
    var { nombre,apellido,estado } = this
    console.log(`Hola me llamo ${nombre} ${apellido} y ${estado}`)
    if (fn) {
      fn(nombre,apellido, true)
    }
  }
}

function disculpas(nombre, apellido, desm) {
  console.log(`Buen dia ${nombre}`)
  if (desm) {
    console.log(`ACCESO DENEGADO ,Lo siento ${nombre} ${apellido} estas desempleado`)
  }
}


let camilo = new empleado('Camilo' ,'Listsi','constructor')
let jose = new desempleado('Jose','Higuita', 'no laboro')
let maria = new desempleado('Maria','Builes','no laboro')
let diana = new empleado('Diana','Garzon','pintora')

camilo.saludar(disculpas)
jose.saludar(disculpas)
maria.saludar(disculpas)
diana.saludar(disculpas)

