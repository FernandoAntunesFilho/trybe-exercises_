const testaNumeros = () => {
    return new Promise((resolve, error) => {
        arrayNumeros = [];
        for (let index = 0; index < 10; index += 1) {
            arrayNumeros.push(Math.floor(Math.random() * 51))
        };
        const numQuadrado = arrayNumeros.map(atual => Math.pow(atual, 2));
        const soma = numQuadrado.reduce((soma, numero) => soma + numero);
        soma < 8000 ? resolve(`SUCESSO!!! A soma é ${soma}`) : error(`ERRO!!! A soma é ${soma}`);
    }).then(resultado => console.log(resultado)).catch(erro => console.log(erro));
};

testaNumeros();