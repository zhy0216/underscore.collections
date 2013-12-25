var assert = require("assert");
var _ = require("underscore");
require("./underscore.collection");

describe('Counter', function(){
    var data = [1,2,3,4,1,3,3];
    var count = new _.Counter(data);

    describe('#init', function(){
        it("should count the array", function(){
            assert.equal(count['1'], 2);
            assert.equal(count['2'], 1);
            assert.equal(count['3'], 3);
            assert.equal(count['4'], 1);
        });

    }); 

    describe('#element()', function(){
        it("should return the same arrary except ordering", function(){
            // value type problem
            assert.equal(count.elements().length, data.length);
        });
    });   

    // describe('#most_common(n)', function(){
    //     it("should the most common data", function(){

    //     })

    // })

    describe('#subtract(anotherCounter)', function(){
        it("should subtracted from counter.", function(){
            var anotherCounter = new _.Counter([1,1,1,2,3,5])      
            count.subtract(anotherCounter);
            assert.equal(count['1'], -1);
            assert.equal(count['2'], 0);
            assert.equal(count['3'], 2);
            assert.equal(count['4'], 1);
            assert.equal(count['5'], -1);

        })

    })



});







