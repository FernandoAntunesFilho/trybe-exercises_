const divisoes = (num) => {
    const divisores = [2, 3, 5, 10];
    return divisores.map(div => num / div);
};

const somaArray = (array => array.reduce((soma, num) => soma += num));

const testaNumeros = () => {
    return new Promise((resolve, error) => {
        arrayNumeros = [];
        for (let index = 0; index < 10; index += 1) {
            arrayNumeros.push(Math.floor(Math.random() * 51))
        };
        const numQuadrado = arrayNumeros.map(atual => Math.pow(atual, 2));
        const soma = numQuadrado.reduce((soma, numero) => soma + numero);
        soma < 8000 ? resolve(divisoes(soma)) : error('É mais de oito mil! Essa promise deve estar quebrada!');
    }).then(resultado => {
        console.log(resultado);
        console.log(`Total da soma desse array: ${somaArray(resultado)}`);
    }).catch(erro => console.log(erro));
};

testaNumeros();