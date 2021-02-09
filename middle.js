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

module.exports = middle;