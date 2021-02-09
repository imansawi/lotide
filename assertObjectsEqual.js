// FUNCTION ASSERTS THAT TWO OBJECTS ARE EQUAL

const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  return assertEqual(eqObjects(object1, object2), true);
};

module.exports = assertObjectsEqual;
