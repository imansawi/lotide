// A FUNCTION MAPS EACH ELEMENT OF AN ARRAY WITH AN ARRAY OF ELEMENTS RELATED TO THE FIRST ONE WITH A CERTAI CONDITION

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

module.exports = map;