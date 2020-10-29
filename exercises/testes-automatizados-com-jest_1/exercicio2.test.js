const { TestScheduler } = require('jest');
const myRemove = require('./exercicio2.js');

const array = [1, 2, 3, 4];

describe('Test block exercise 2', () => {
    test('number 3 will be removed fron the array', () => {
        expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    });
    test('if NOT return the original array', () => {
        expect(myRemove(array, 3)).not.toEqual(array);
    });
    test('if original array has not changed', () => {
        const unchanged = [1, 2, 3, 4];
        myRemove(array, 1);
        expect(array).toEqual([1, 2, 3, 4]);
    });
    test('if parameter 5 returns correct', () => {
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    });
});