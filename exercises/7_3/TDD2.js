const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(array) {
    let contaLetras = 0;
    const arrayContador = [];
        for (let index = 0; index < array.length; index += 1) {
            contaLetras = array[index].length;
            arrayContador.push(contaLetras);
        }
    return arrayContador;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
