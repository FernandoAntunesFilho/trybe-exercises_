const { TestScheduler } = require('jest');
const myRemove = require('./exercicio2.js');

describe('Test block exercise 2', () => {
    test('number 3 will be removed fron the array', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    });
    test('if NOT return the original array', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).not.toEqual(array);
    });
    test('if original array has not changed', () => {
        const array = [1, 2, 3, 4];
        const unchanged = [1, 2, 3, 4];
        expect(myRemove(array, unchanged));        
    });
    test('if parameter 5 returns correct', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    });
});