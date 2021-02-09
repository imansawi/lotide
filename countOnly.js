// A FUNCTION RETURNS COUNT OF ITEMSWITH A SPECIFIC CONDITION

const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  if (allItems.length === 0) {
    return undefined;
  } else {
    let countedItems = {};
    for (let item in itemsToCount) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (item === allItems[i] && itemsToCount[item] === true) {
          count++;
        }
      }
      if (itemsToCount[item] === true && count > 0) {
        countedItems[item] = count;
      }
    }
    return countedItems;
  }
};

module.exports = countOnly;