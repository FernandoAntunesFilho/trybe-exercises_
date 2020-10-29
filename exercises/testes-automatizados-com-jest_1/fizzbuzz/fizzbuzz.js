// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzz = (n) => {
    const numbers = [];
    const arrayResul = [];
    for (let num = 1; num <= n; num += 1) {
        numbers.push(num);
    }
    numbers.forEach((num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            arrayResul.push('fizzbuzz');
        } else if (num % 3 === 0) {
            arrayResul.push('fizz');
        } else if (num % 5 === 0) {
            arrayResul.push('buzz');
        } else (arrayResul.push(num));
    })
    arrayResul.forEach(num => console.log(num))
}

fizzBuzz(15);

module.exports = fizzBuzz;