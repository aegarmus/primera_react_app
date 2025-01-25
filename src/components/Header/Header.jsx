import PropTypes from 'prop-types';

import './header.css'

export const Header = ({ title, subtitle }) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}



/* 
Tipos de Datos!

1 - Primitivos
- Strings - cadenas de textos
- Numbers - Numeros enteros, decimales y flotantes
- Booleanos - Verdaderos o falsos
- Null - Nulo o Vacio
- Undefined - valores indefinidos
- Symbol - Valores con referencia única
-BigInt - Núneros muy grandes que requieren notación cientificos

2 - Referenciales - No Primitivos
- Funciones
- Objetos -> No Mutabilidad de Objetos 
    |-Arrays
    |-Set
    |-Tuplas (se vienen en las proxumas versiones del lenguaje)
    |-Promises


Clases fabrican objetos

Pero los objetos tienen pares de clave y valor

const alan = {
    nombre: 'Alan',
    apellido: 'García',
    edad: 30

}


DESTRUCTURACION

const nombre = alan.nombre
const apellido = alan.apellido
const edad = alan.edad

const { nombre, apellido, edad } = alan


*/