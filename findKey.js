// A FUNCTION FINDS KEY IN AN OBJECT

const eqArrays = require('./eqArrays');
const assertEqual = require("./assertEqual.js");

const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;