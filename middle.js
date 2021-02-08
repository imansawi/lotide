// const middleTest = require('./test/middleTest');
// const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION RETURNS THE MIDDLE OF AN ARRAY
const middle = function(myArray) {
  let middleElement = [];
  if  (myArray.length < 3) {
    return middleElement;
  } else if (myArray.length % 2 === 0) {
    middleElement.push(myArray[myArray.length / 2 - 1]);
    middleElement.push(myArray[myArray.length / 2]);
  } else {
    middleElement.push(myArray[(myArray.length / 2).toFixed() - 1]);
  }
  return middleElement;
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 9, 4, 7]));
console.log(middle([7, 6, 3, 4, 1, 2]));

module.exports = middle;