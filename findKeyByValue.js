// A FUNCTION FINDS KEY IN AN OBJECT BY ITS VALUE

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
  
const findKeyByValue = function(myObject, value) {
const keysArr = Object.keys(myObject);
let item0 = undefined;
for (const item of keysArr) {
  if (myObject[item] === value) {
    item0 = item;
  }
}
return item0;
};

module.exports = findKeyByValue;

