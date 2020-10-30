// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelsArray = ['a', 'e', 'i', 'o', 'u']

const vowels = (str) => {
    let countVowel = 0;
    vowelsArray.forEach((char) => {
        for (let index = 0; index < str.length; index += 1) {
            if (char.toLowerCase() === str.charAt(index).toLowerCase()) countVowel += 1;
        }
    })
    return countVowel;
}

module.exports = vowels;