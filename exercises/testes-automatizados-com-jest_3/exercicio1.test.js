// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

let randonNumber = require('./exercicio1')

describe('Teste utilizando mock', () => {
    randonNumber = jest.fn().mockReturnValue(10);

    test('Teste se a função foi chamada', () => {
        randonNumber();
        expect(randonNumber).toHaveBeenCalled();
    });

    test('Qual o seu retorno', () => {
        expect(randonNumber()).toBe(10);
    });

    test('Quantas vezes foi chamada', () => {
        randonNumber();
        expect(randonNumber).toHaveBeenCalledTimes(3);
    });
});