var assert = require('assert');
var functions = require('../Eating_out');

describe("fun",function(){
  it("should return the total amount of the Bill",function(){
    var result = functions.fun();
    assert.equal(result,"R599");
  });
});
