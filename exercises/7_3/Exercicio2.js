const assert = require('assert');
const myArray = [1, 2, 3, 4];
const unchanged = [1, 2, 3, 4];

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove(myArray, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(myArray, 3), [1, 2, 3, 4]);
assert.deepStrictEqual(myArray, unchanged);
assert.deepStrictEqual(myRemove(myArray, 5), [1, 2, 3, 4]);
