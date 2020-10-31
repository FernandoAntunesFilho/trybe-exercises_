// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

let randonNumber = require('./exercicio1');

describe('Teste utilizando mock', () => {
    afterEach(() => {
        randonNumber.mockRestore();
        randonNumber = jest.fn((a) => a * 2);
      });

    randonNumber = jest.fn((a, b, c) => a * b * c);

    test('Nova implementação recebe 3 parametros e retorna a multiplicação', () => {
        expect(randonNumber(4, 2, 3)).toBe(24);
    });

    test('implementação resetada e implementada nova função', () => {
        expect(randonNumber(20)).toBe(40);
    })
});