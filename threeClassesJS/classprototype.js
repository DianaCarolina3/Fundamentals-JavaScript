class persona {
  constructor(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
  }

  saludar(fn) {
    var { nombre,apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre,apellido, false)
    }
  }
  alturaPersona() {
    var { nombre,apellido,altura } = this
    if(altura >= 1.8) {
      console.log(`${nombre} ${apellido} tu eres alto`)
    } else {
      console.log(`${nombre} ${apellido} tu eres bajo`)
    }
  }
}

//extends = es la herencia del padre al hijo
//super = remplaza this llamandolo del constructor del padre.no se puede llamar en otra clase como propio sino heredado
class desarrollador extends persona {
  constructor (nombre,apellido,edad, altura) {
    super(nombre, apellido,edad,altura)
    //despues de super si podemos usar this
  }

  saludar(fn) {
    var { nombre,apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev) {
    console.log(`Ohhh ${nombre} no sabia que eras desarrollador/a`)
  }
}



// let camilo = new persona('Camilo' ,'Listsi', 25 , 1.75)
// let jose = new persona('Jose','Higuita', 38, 1.80)
// let maria = new desarrollador('Maria','Builes',95, 1.85)
// let diana = new desarrollador('Diana','Garzon',84 , 1.60)

// camilo.saludar(responderSaludo)
// jose.saludar(responderSaludo)
// maria.saludar()
// diana.saludar(responderSaludo)

