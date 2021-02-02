const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crosDamian: true }



function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function(data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
.all(promesas)
.then(personajes => console.log(personajes))
.catch(onError)

// obtenerPersonaje(1)
// .then((character) => {
//   console.log(`El personaje 1 es ${character.name}`)
//   return obtenerPersonaje(2)
// })
// .then((character) => {
//   console.log(`El personaje 2 es ${character.name}`)
//   return obtenerPersonaje(3)
// })
// .then((character) => {
//   console.log(`El personaje 3 es ${character.name}`)
//   return obtenerPersonaje(4)
// })
// .then((character) => {
//   console.log(`El personaje 4 es ${character.name}`)
//   return obtenerPersonaje(5)
// })
// .then((character) => {
//   console.log(`El personaje 5 es ${character.name}`)
//   return obtenerPersonaje(6)
// })
// .then((character) => {
//   console.log(`El personaje 6 es ${character.name}`)
//   return obtenerPersonaje(7)
// })
// .then((character) => {
//   console.log(`El personaje 7 es ${character.name}`)
//   return obtenerPersonaje(8)
// })
// .then((character) => {
//   console.log(`El personaje 8 es ${character.name}`)
// })
// .catch(onError)

