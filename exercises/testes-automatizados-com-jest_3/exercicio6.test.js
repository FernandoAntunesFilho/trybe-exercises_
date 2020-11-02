// Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

let { fetchDog } = require("./exercicio6");

describe('Testes com requisição mockada', () => {
    fetchDog = jest.fn();
    
    test('when request is successful', () => {
        fetchDog.mockResolvedValue('request success');    
        expect(fetchDog()).resolves.toBe('request success');
    });

    test('when request is failed', () => {
        fetchDog.mockRejectedValue('request failed');
        expect(fetchDog()).rejects.toBe('request failed');
    });

});