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



describe('Deque', function() {
    var data = [1, 2, 3];
    describe('#constructor', function() {
        var deque = new _.Deque(data);
        assert.equal(deque.length(), 3);
    })

    describe('#appendleft', function() {
        var deque = new _.Deque(data);
        deque.appendleft(0);
        assert.equal(deque.getValues()[0], 0);
    })

    describe('#clear', function() {
        var deque = new _.Deque(data);
        deque.clear();
        assert.equal(deque.length(), 0);
    })

    describe('#count', function() {
        var data = [1, 1, 2, 2, 2]
        var deque = new _.Deque(data);
        assert.equal(deque.count(), 0);
        assert.equal(deque.count(0), 0);
        assert.equal(deque.count(1), 2);
        assert.equal(deque.count(2), 3);
    })

    describe('#extend', function() {
        var data_new = [1, 1, 2, 2, 2]
        var deque = new _.Deque(data);
        deque.extend(data_new);
        assert.equal(deque.length(), 8);
        assert.equal(deque.getValues()[7], 2);
    })

    describe('#extendleft', function() {
        var data_new = [9, 1, 2, 2, 2]
        var deque = new _.Deque(data);
        deque.extendleft(data_new);
        assert.equal(deque.length(), 8);
        assert.equal(deque.getValues()[0], 9);
    })

    describe('#reverse', function() {
        var deque = new _.Deque(data);
        deque.reverse();
        assert.equal(deque.getValues()[0], 3);
    })

})


describe('OrderedDict', function() {
    var od;

    function init() {
        od = _.OrderedDict();
        od.put(1, "one");
        od.put(2, "two");
        od.put(3, "three");
    }


    describe("#put", function() {
        init();
        assert.equal(od.length, 3);
        od.put(1, "one");
        assert.equal(od.length, 3);
        assert.equal(od.get(1), "one");
        assert.equal(od.keys()[0], 1);
    })

    describe("#remove", function() {
        init();
        assert.equal(od.length, 3);
        od.remove(2);
        assert.equal(od.length, 2);
    })

    describe("#hasKey", function() {
        init();
        assert.equal(od.hasKey(1), true);
        assert.equal(od.hasKey("1"), false);
    })

    describe("#get", function() {
        init();
        assert.equal(od.get(1), "one");
        assert.equal(od.get(5), undefined);
        assert.equal(od.get("1"), undefined);
    })


})