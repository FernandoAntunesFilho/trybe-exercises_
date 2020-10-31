// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let randonNumber = require('./exercicio1')

describe('Teste utilizando mock', () => {
    randonNumber = jest.fn((a, b) => a / b);

    test('Nova implementação na função randonNumber', () => {
        expect(randonNumber(20, 2)).toBe(10);
    });
});