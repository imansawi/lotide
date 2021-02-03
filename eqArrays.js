// FUNCTION TESTS IF TWO ARRAYS ARE EQUAL

const eqArrays = function(array1, array2) {
  if (array1 === undefined || array2 === undefined) {
    if (array1 === undefined && array2 === undefined) {
      return true;
    }
    return false;
  }
  if (array1.length !== 0 &&
    array2.length !== 0 &&
    array1.length === array2.length) {
    let arr1 = array1.sort();
    let arr2 = array2.sort();
    for (let i = 0; i < array1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = eqArrays;
