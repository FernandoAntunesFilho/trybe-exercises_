const assert = require('assert');
// escreva a função addAllnumbers aqui
function addAllnumbers(array) {
    let soma = 0;
        for (let index = 0; index < array.length; index += 1) {
            soma += array[index];
        }
    return soma;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);