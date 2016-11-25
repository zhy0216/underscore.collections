'use strict'
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
    var ll = null;
    self.length = 0
    
    function init() {
        // http: //stackoverflow.com/a/7486130
        arraryData = arraryData || []
        ll = new _.LinkedList(arraryData)
        self.length = arraryData.length;
    }
    /** 
     * Add x to the right side of the deque
     * 
     * @param {any} x
     * @member _.Deque#append
     */
    self.append = function(x) {
        ll.append(new _.LinkedNode(x));
        self.length ++;
    }
    /** 
     * Add x to the left side of the deque
     * @member _.Deque#appendleft
     * @param {any} x 
     */
    self.appendleft = function(x) {
        ll.preappend(new _.LinkedNode(x));
        self.length ++;
    }
    /** 
     * Remove all elements from the deque leaving it with length 0
     * @member _.Deque#clear
     */
    self.clear = function() {
        ll = new _.LinkedList();
        self.length = 0;
        return self;
    }
    /** 
     * Count the number of deque elements equal to x.
     * comparating is using '===' 
     * @member _.Deque#count
     * @param {any} x
     */
    self.count = function(x) {
        var counter = 0;        
        for(let value of ll.iterator()){
            if(value === x){
                counter ++;
            }
        }
        return counter;
    }
    /** 
     * Extend the right side of the deque by appending
     * elements from the iterable argument.
     * @param {array} x 
     * @member _.Deque#extend
     */
    self.extend = function(anotherArrary) {
        // anotherArrary = anotherArrary || []
        // if(anotherArrary.length > 0){
        //     newll == new _.LinkedList(anotherArrary)
        //     ll.tail.next = newll.head
        //     newll.head.prev = ll.tail
        // }

        // return self;
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
        // anotherArrary = anotherArrary || []
        // if(anotherArrary.length > 0){
        //     newll == new _.LinkedList(anotherArrary)
        //     newll.tail.next = ll.head
        //     ll.head.prev = tail.tail
        // }
        // return self;
    }

    /** 
     * Reverse the elements of the deque in-place
     * 
     * @member _.Deque#reverse
     */
    self.reverse = function() {
        ll.reverse();
        return self;
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
        var r = ll.tail;
        ll.delete_by_node(r)
        return r.val
    }
    /** 
     * Remove and return an element from the left side of the deque.
     * If no elements are present and silence is false, then raises an IndexException.
     * @member _.Deque#popleft
     * @param {bool} silence need to raise IndexException or not
     */
    self.popleft = function(silence){
        if(ll.length === 0 && silence === false){
            throw new Error("Index Exception")
        }
        var r = ll.head;
        ll.delete_by_node(r)
        return r.val
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

    self.toString = function () {
        return "Deque: " + ll.toString()
    }


    init()

    return self;
}
