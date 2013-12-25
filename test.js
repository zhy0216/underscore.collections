var assert = require("assert");
var _ = require("underscore");
require("./underscore.collection");

describe('Counter', function(){
    var data = [1,2,3,4,1,3,3]
    

    describe('#init()', function(){
        var count = new _.Counter(data);
        it("should count the array", function(){
            assert.equal(count['1'], 2);
            assert.equal(count['2'], 1);
            assert.equal(count['3'], 3);
            assert.equal(count['4'], 1);
        });

    });    

});







