const assert = require('assert');

const verify = (password) => {
    if (password.length < 8) {
        return false;
    }

    if (password === null) {
        return false
    }

        let contaMaiuscula = 0;
        let contaMinuscula = 0;
        let contaNumero = 0;
        const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let index = 0; index < password.length; index += 1) {
        if (password.charAt(index) === password.charAt(index).toUpperCase()) {
            contaMaiuscula += 1;
        }

        if (password.charAt(index) === password.charAt(index).toLowerCase()) {
            contaMinuscula += 1;
        }

        for (let indexN = 0; indexN < numeros.length; indexN += 1) {
                let letra = password.charAt(index);
                let num = numeros[indexN]
            if (password.charAt(index) === numeros[indexN]) {
                contaNumero += 1;
            }
        }

        if (index === password.length - 1) {
            if (contaMinuscula > 0 && contaMaiuscula > 0 && contaNumero > 0){
                return true
            }
            return false;
        }
    }
    return true;
}

const password = 'fErnand8';
const wrongPassword = '';

assert.strictEqual(verify(password), true);
assert.strictEqual(verify(wrongPassword), false);