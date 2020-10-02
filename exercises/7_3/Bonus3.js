const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (list) => {
    return list.splice(Math.trunc(list.length / 2,),1);
    return list;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);