var assert = require("assert");
var _ = require("underscore");
require("../underscore.collection");


describe('LinkedList', function() {
    var data = [9, 5, 2, 7, 4, 6];

    it('#constructor', function() {
        var linkedlist = new _.LinkedList(data);
        assert.equal(linkedlist.toString(), "[9] <-> [5] <-> [2] <-> [7] <-> [4] <-> [6]");
    })

    it('#append && preappend', function() {
        var linkedlist = new _.LinkedList();
        linkedlist.append(new _.LinkedNode("1"))
        assert.equal(linkedlist.toString(), "[1]");
        linkedlist.append(new _.LinkedNode("2"))
        assert.equal(linkedlist.toString(), "[1] <-> [2]");
        linkedlist.preappend(new _.LinkedNode("3"))
        assert.equal(linkedlist.toString(), "[3] <-> [1] <-> [2]");
    })

    it('#delete_by_node', function() {
        var linkedlist = new _.LinkedList(data);
        var node9 = linkedlist.find(9)
        assert.equal(node9.toString(), "[9]");
        linkedlist.delete_by_node(node9)
        assert.equal(linkedlist.toString(), "[5] <-> [2] <-> [7] <-> [4] <-> [6]");
        var node7 = linkedlist.find(7)
        assert.equal(node7.toString(), "[7]");
        linkedlist.delete_by_node(node7)
        assert.equal(linkedlist.toString(), "[5] <-> [2] <-> [4] <-> [6]");
    })


})


