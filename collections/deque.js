var _ = require("underscore");

_.Deque = function(arraryData) {
    var self = {};
    var array = [];

    function init() {
        // http: //stackoverflow.com/a/7486130
        array = (arraryData || []).slice(0)
    }
    // Add x to the right side of the deque
    self.append = function(x) {
        array.push(x);
    }
    // Add x to the left side of the deque.
    self.appendleft = function(x) {
        array.unshift(x);
    }
    // Remove all elements from the deque leaving it with length 0
    self.clear = function() {
        array = [];
        return self;
    }
    // Count the number of deque elements equal to x.
    self.count = function(x) {
        x = x || Object()
        return _.filter(array, function(n) {
            return n == x;
        }).length;
    }
    // Extend the right side of the deque by appending
    // elements from the iterable argument.
    self.extend = function(anotherArrary) {
        array = array.concat(anotherArrary);
        return self;
    }
    self.extendleft = function(anotherArrary) {
        array = anotherArrary.concat(array);
        return self;
    }
    // self.extendleft = null

    //Reverse the elements of the deque in-place
    self.reverse = function() {
        array.reverse();
        return self;
    }
    self.length = function() {
        return array.length
    }
    self.getValues = function(byReference) {
        byReference = byReference || false;

        if (byReference) {
            return array;
        }
        return array.slice(0)
    }
    self.copy = function() {
        return _.Deque(array.slice(0));
    }
    init()

    return self;
}
