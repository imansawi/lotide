// FUNCTION RETURNS TAIL OF AN ARRAY

const tail = function(myArray) {
  if (myArray.length <= 1) {
    return myArray;
  } else {
    return myArray.slice(1);
  }
};

module.exports = tail;