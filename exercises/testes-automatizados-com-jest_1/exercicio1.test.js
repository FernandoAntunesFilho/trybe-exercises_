const sum = require('./exercicio1.js');

describe('Test block exercise 1', () => {
    test('if 4 + 5 is equal 9', () => {
        expect(sum(4, 5)).toBe(9);    
    });
    test('if 0 + 0 is equal 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    test('if function spear en error if a value is a string', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow();
    });
    test('if a error mesage is "parameters must be numbers"', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow('parameters must be numbers');
    });
})