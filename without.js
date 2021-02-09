// A FUNCTION RETURNS AN ARRAY WITHOUT AN ELEMENT WITH A SPECIFIC CONDITION

const without = function(sourceArray, itemsToRemoveAarray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemoveAarray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

module.exports = without;