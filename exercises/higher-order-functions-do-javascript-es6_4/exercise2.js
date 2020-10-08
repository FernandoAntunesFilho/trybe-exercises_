const assert = require('assert')

// escreva sum abaixo
const sum = (...numeros) => {
    let soma = 0;
    numeros.forEach((numero) => soma = soma + numero);
    return soma;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)