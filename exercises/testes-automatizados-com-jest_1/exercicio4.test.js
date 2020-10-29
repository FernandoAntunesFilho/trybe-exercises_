const { TestScheduler } = require('jest');
const myFizzBuzz = require('./exercicio4.js');

describe('Test block exercise 4', () => {
    test('number divided by 3 and 5 returns "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('number divided by 3 returns "fizz"', () => {
        expect(myFizzBuzz(12)).toBe('fizz');
    });
    test('number divided by 5 returns "buzz"', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    test('if a number is NOT divided by 5 or 3 returns same number', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    test('if is NOT a number returns null', () => {
        expect(myFizzBuzz("xablau")).toBeFalsy();
    });
});