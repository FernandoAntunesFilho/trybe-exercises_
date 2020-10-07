    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const lista = arrays.reduce((acumulador, valorAtual) => {
    valorAtual.forEach((elemento) => acumulador.push(elemento));
    return acumulador;
  }, [])
  return lista;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

// console.log(flatten());