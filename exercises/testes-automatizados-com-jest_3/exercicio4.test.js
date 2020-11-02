// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las

let { uppercase, firstChar, concat } = require('./exercicio4');

jest.mock('./exercicio4');

uppercase.mockImplementation( string => string.toLowerCase() );
firstChar.mockImplementation( string => string.charAt(string.length - 1) );
concat.mockImplementation( (string1, string2, string3) => string1 + string2 + string3 );

describe('Bloco de testes mock', () => {
    test('Teste do mock uppercase', () => {
        expect(uppercase('FERNANDO')).toBe('fernando');
    });

    test('Teste do mock firstchar', () => {
        expect(firstChar('Fernando')).toBe('o');
    });

    test('Teste do mock concat', () => {
        expect(concat('Fernando', 'Antunes', 'Filho')).toBe('FernandoAntunesFilho');
    });
});