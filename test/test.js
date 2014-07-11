var assert = require("assert");
var _ = require("underscore");
require("../underscore.collection");

describe('Counter', function() {
    var data = [1, 2, 3, 4, 1, 3, 3];


    describe('#init', function() {
        it("should count the array", function() {
            var count = new _.Counter(data);
            assert.equal(count[1], 2);
            assert.equal(count[2], 1);
            assert.equal(count[3], 3);
            assert.equal(count[4], 1);
        });

    });

    describe('#element()', function() {
        it("should return the same arrary except ordering", function() {
            // value type problem
            var count = new _.Counter(data);
            assert.equal(count.elements().length, data.length);
        });
    });

    describe('#most_common(n)', function() {
        it("should the most common data", function() {
            var count = new _.Counter(data);
            var result = count.mostCommon();
            assert.equal(result[0][1], 3);
            assert.equal(result[1][1], 2);
            assert.equal(result[2][1], 1);
            assert.equal(result[3][1], 1);

            result = count.mostCommon(2);
            assert.equal(result.length, 2);
            assert.equal(result[0][1], 3);
            assert.equal(result[1][1], 2);
        })

    })

    describe('#subtract(anotherCounter)', function() {
        it("should subtracted from counter.", function() {
            var count = new _.Counter(data);
            var anotherCounter = new _.Counter([1, 1, 1, 2, 3, 5])
            count.subtract(anotherCounter);
            assert.equal(count[1], -1);
            assert.equal(count[2], 0);
            assert.equal(count[3], 2);
            assert.equal(count[4], 1);
            assert.equal(count[5], -1);

        })

    })

});


describe('Set', function() {

    describe('#construct', function() {
        var set = new _.Set([1, 2, 2, 4]);
        assert.ok(1 in set);
    })

    describe('#add', function() {
        var set = new _.Set([1, 2, 2, 4]);
        assert.ok(!(7 in set));
        set.add(7)
        assert.ok(7 in set);

    })

    describe('#remove', function() {
        var set = new _.Set([1, 2, 2, 4]);
        assert.ok(2 in set);
        set.remove(2)
        assert.ok(!(2 in set));
    })

    describe('#has', function() {
        var set = new _.Set([1, 2, 2, 4]);
        set.a = 1;
        assert.ok(!set.has("a"));
        set.a = null;
        assert.ok(set.has("a"));
    })

    describe('#clear', function() {
        var set = new _.Set([1, 2, 2, 4]);
        assert.ok(set.has(1));
        set.clear();
        assert.ok(!set.has(1));
    })


})