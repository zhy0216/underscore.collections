var assert = require("assert");
var _ = require("underscore");
require("../underscore.collection");


describe('Deque', function() {
    var data = [1, 2, 3];
    it('#constructor', function() {
        var deque = new _.Deque(data);
        assert.equal(deque.length, 3);
    })

    it('#appendleft', function() {
        var deque = new _.Deque(data);
        deque.appendleft(0);
        assert.equal(deque.popleft(), 0);
    })

    it('#clear', function() {
        var deque = new _.Deque(data);
        deque.clear();
        assert.equal(deque.length, 0);
    })

    it('#count', function() {
        var data = [1, 1, 2, 2, 2]
        var deque = new _.Deque(data);
        assert.equal(deque.count(), 0);
        assert.equal(deque.count(0), 0);
        assert.equal(deque.count(1), 2);
        assert.equal(deque.count(2), 3);
    })

    it('#extend', function() {
        var data_new = [1, 1, 2, 2, 2]
        var deque = new _.Deque(data);
        deque.extend(data_new);
        assert.equal(deque.length(), 8);
        assert.equal(deque.getValues()[7], 2);
    })

    it('#extendleft', function() {
        var data_new = [9, 1, 2, 2, 2]
        var deque = new _.Deque(data);
        deque.extendleft(data_new);
        assert.equal(deque.length(), 8);
        assert.equal(deque.getValues()[0], 9);
    })

    it('#reverse', function() {
        var deque = new _.Deque(data);
        deque.reverse();
        assert.equal(deque.toString(), 3);
    })

})
