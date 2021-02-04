// Function counts a specific subset of items taken from a collection of them and returns their count.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return;
};

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

// TEST CODE
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);