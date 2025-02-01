const persona = {
    nombre: 'Paula',
    apellido: 'Asenjo',
    edad: 25,
    colorPelo: 'rubia'
}
//Spread Operator {...variable}
const persona2 = { ...persona };

persona2.colorPelo = 'azul';
persona.colorOjos = 'marron'

console.log('Persona 1', persona)
console.log('Persona 2', persona2)