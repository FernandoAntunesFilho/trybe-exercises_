// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
    let negative = false;
    let reverse = '';
    const nString = n.toString();
    n < 0 ? negative = true : negative = false;
    for (let i = nString.length - 1; i >= 0; i -= 1) {
        reverse += nString.charAt(i);
    }
    const reverseNumber = parseInt(reverse);
    if (negative === true) {
        return reverseNumber * (-1);
    }
    return reverseNumber
}

module.exports = reverseInt;