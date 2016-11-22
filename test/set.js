var assert = require("assert");
var _ = require("underscore");
require("../underscore.collection");

describe('Set', function() {

    it('#construct', function() {
        var set = new _.Set([1, 2, 2, 4]);
        assert.ok(set.has(1));
        assert.equal(set.length, 3);
    })

    it('#add', function() {
        var set = new _.Set([1, 2, 2, 4]);
        assert.ok(!set.has(7));
        set.add(7)
        assert.ok(set.has(7));
    })

    it('#remove', function() {
        var set = new _.Set([1, 2, 2, 4]);
        assert.ok(set.has(2));
        set.remove(2)
        assert.ok(!set.has(2));
    })

    it('#has', function() {
        var set = new _.Set([1, 2, 2, 4]);
        set.a = 1;
        assert.ok(!set.has("a"));
        set.add("a")
        assert.ok(set.has("a"));
    })

    it('#clear', function() {
        var set = new _.Set([1, 2, 2, 4]);
        
        assert.ok(set.has(1));
        set.clear();
        assert.ok(!set.has(1));
    })


})