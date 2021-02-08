const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// FUNCTION ASSERTS TWO ARRAYS ARE EQUAL
const assertArraysEqual = function(array1, array2, result) {
  assertEqual(eqArrays(array1, array2), result);
};

//console.log(assertArraysEqual([1, 2, 5], [5, 1, 2], true));
//console.log(assertArraysEqual([1, 2, 5], [5, 1, 3], true));

module.exports = assertArraysEqual;