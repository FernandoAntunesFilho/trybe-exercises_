const { TestScheduler } = require('jest');
const myRemoveWithoutCopy = require('./exercicio3.js');

describe('Test block exercise 3', () => {
    test('Check if function returns correct', () => {
        const array = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
    });
    test('Check if function NOT returns the original array', () => {
        const array = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Check if function NOT returns the original array', () => {
        const array = [1, 2, 3, 4];
        myRemoveWithoutCopy(array, 3);
        expect(array).not.toEqual([1, 2, 3, 4]);
    });
    test('if parameter 5 returns correct', () => {
        const array = [1, 2, 3, 4];
        expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
    });
});