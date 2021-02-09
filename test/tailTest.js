// TEST AND ASSERTION THE TAIL OF AN ARRAYS USING MOCHA & CHAI

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs', 'Bootcamp']", () => {
    assert.deepEqual(tail(["Welcome!", "Lighthouse", "Labs","Bootcamp"]), ["Lighthouse", "Labs", "Bootcamp"]);
  });
});