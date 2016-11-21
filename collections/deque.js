var _ = require("underscore");

/**
 * Returns a new deque object initialized left-to-right (using append()) with data from iterable.
 * If iterable is not specified, the new deque is empty.
 * Deques are a generalization of stacks and queues (the name is pronounced “deck” and is short for “double-ended queue”). 
 * Deques support thread-safe, memory efficient appends and pops from either side of the deque with approximately the same O(1) performance in either direction.
 * 
 * @class
 * 
 */
_.Deque = function(arraryData) {
    var self = {};
    var array = [];
    
    function init() {
        // http: //stackoverflow.com/a/7486130
        array = (arraryData || []).slice(0)
    }
    /** 
     * Add x to the right side of the deque
     * 
     * @param {any} x
     * @member _.Deque#append
     */
    self.append = function(x) {
        array.push(x);
    }
    /** 
     * Add x to the left side of the deque
     * @member _.Deque#appendleft
     * @param {any} x 
     */
    self.appendleft = function(x) {
        array.unshift(x);
    }
    /** 
     * Remove all elements from the deque leaving it with length 0
     * @member _.Deque#clear
     */
    self.clear = function() {
        array = [];
        return self;
    }
    /** 
     * Count the number of deque elements equal to x.
     * comparating is using '===' 
     * @member _.Deque#count
     * @param {any} x
     */
    self.count = function(x) {
        return _.filter(array, function(n) {
            return n === x;
        }).length;
    }
    /** 
     * Extend the right side of the deque by appending
     * elements from the iterable argument.
     * @param {array} x 
     * @member _.Deque#extend
     */
    self.extend = function(anotherArrary) {
        array = array.concat(anotherArrary);
        return self;
    }
    // note for concat
    // The concat() method is used to merge two or more arrays. 
    // This method does not change the existing arrays, but instead returns a new array.
    /** 
     * Extend the left side of the deque by appending
     * elements from the iterable argument.
     * @param {array} x 
     * @member _.Deque#extendleft
     */
    self.extendleft = function(anotherArrary) {
        // unshift it will faster?
        // do this test later
        array = anotherArrary.concat(array);
        return self;
    }

    /** 
     * Reverse the elements of the deque in-place
     * 
     * @member _.Deque#reverse
     */
    self.reverse = function() {
        array.reverse();
        return self;
    }
    /** 
     * Reverse the length of the deque
     * 
     * @member _.Deque#length
     */
    self.length = function() {
        return array.length
    }
    /** 
     * Reverse the length of the deque; if byReference is true, it will be shallow copy; 
     * it means if you change the index of the returned array, it will affect this deque
     * @param {bool} byReference return value is referenced or not
     * @member _.Deque#getValues
     * 
     */
    self.getValues = function(byReference) {
        byReference = byReference || false;

        if (byReference) {
            return array;
        }
        return array.slice(0)
    }
    /** 
     * return a shallow copy of this deque
     * @member _.Deque#copy
     * 
     */
    self.copy = function() {
        return _.Deque(array.slice(0));
    }
    /** 
     * Remove and return an element from the right side of the deque.
     * If no elements are present and silence is false, then raises an IndexException.
     * @member _.Deque#pop
     * @param {bool} silence need to raise IndexException or not
     */
    self.pop = function(silence){
        if(array.length === 0 && silence === false){
            throw new Error("Index Exception")
        }
        return array.pop()
    }
    /** 
     * Remove and return an element from the left side of the deque.
     * If no elements are present and silence is false, then raises an IndexException.
     * @member _.Deque#popleft
     * @param {bool} silence need to raise IndexException or not
     */
    self.popleft = function(silence){
        if(array.length === 0 && silence === false){
            throw new Error("Index Exception")
        }
        return array.shift()
    }
    // Rotate the deque n steps to the right. 
    // If n is negative, rotate to the left.
    /** 
     * Rotate the deque n steps to the right.
     * If n is negative, rotate to the left.
     * @member _.Deque#rotate
     * @param {int} n the length of step
     */
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
