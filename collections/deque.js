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
    // note for concat
    // The concat() method is used to merge two or more arrays. 
    // This method does not change the existing arrays, but instead returns a new array.
    self.extendleft = function(anotherArrary) {
        // unshift it will faster?
        // do this test later
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
    // Remove and return an element from the right side of the deque. 
    // If no elements are present, raises an .IndexException.
    self.pop = function(silence){
        if(array.length === 0 && silence === false){
            throw new Error("Index Exception")
        }
        return array.pop()
    }
    self.popleft = function(silence){
        if(array.length === 0 && silence === false){
            throw new Error("Index Exception")
        }
        return array.shift()
    }
    // Rotate the deque n steps to the right. 
    // If n is negative, rotate to the left.
    self.rotate = function(step) {
        while(step > 0){
            self.appendleft(self.pop())
            step--;
        }

        while(step < 0){
            self.append(self.popleft())
            step++;
        }
    }


    init()

    return self;
}
