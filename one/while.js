let sacha = {
    nombre:'sacha',
    apellido: 'listsi',
    edad: 15,
    peso: 80
  }

  console.log(`Al inicio del año ${sacha.nombre} ${sacha.apellido} de ${sacha.edad} años, pesa ${sacha.peso.toFixed(1)}kg`)

  // incremento o decremento de peso
  const CAMBIO_PESO = 0.3
  const DIAS_ANO = 365

  const aumentarPeso = persona => persona.peso += CAMBIO_PESO
  const bajarPeso = persona => persona.peso -= CAMBIO_PESO
  const comeMucho = () => Math.random() < 0.3
  const haceDeporte = () => Math.random() < 0.4

  const META = sacha.peso - 3
  let dias = 0

  while (sacha.peso > META) {
    if(comeMucho()) {
      aumentarPeso(sacha)
    }
    if(haceDeporte()){
      bajarPeso(sacha)
    }
    dias += 1
  }

  console.log(`pasaron ${dias} hasta que ${sacha.nombre} ${sacha.apellido} adelgazo 3kg`)