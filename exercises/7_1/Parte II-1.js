
function fatorar(numero) {
    let resultado=1;
    for (numero; numero>=2; numero-=1) {
        resultado *= numero;
    }
    return resultado;
}

console.log(fatorar(6));