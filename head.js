// FUNCTION RETURNS HEAD OF AN ARRAY

const head = function(myArray) {
  if (myArray.length > 0) {
    return myArray.shift();
  }  
};

module.exports = head;
