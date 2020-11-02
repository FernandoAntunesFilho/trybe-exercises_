// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const exercicio4 = require('./exercicio4');
// let { uppercase, firstChar, concat } = require('./exercicio4');

describe('Bloco de testes mock', () => {    
    test('Testanto a implementação original', () => {
        expect(exercicio4.uppercase('Fernando')).toBe('FERNANDO');

        exercicio4.uppercase = jest.spyOn( exercicio4, 'uppercase' ).mockImplementation( string => string.toLowerCase() );

        exercicio4.uppercase('Fernando');
        expect(exercicio4.uppercase).toHaveBeenCalled();
        expect(exercicio4.uppercase).toHaveBeenCalledTimes(1);
        expect(exercicio4.uppercase).toHaveBeenCalledWith('Fernando');
        expect(exercicio4.uppercase('Fernando')).toBe('fernando');

        exercicio4.uppercase.mockRestore();
        expect(exercicio4.uppercase('Fernando')).toBe('FERNANDO')
    });
});