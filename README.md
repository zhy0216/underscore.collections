underscore.collections
======================

**under development**

A underscore extension which provides some useful data structure, inspred by [python collection](http://docs.python.org/2/library/collections.html)

click [here](http://zhy0216.github.io/underscore.collections/) to see a flatdoc.


For test
-------------
* `npm install mocha`
* `npm install underscore`

Then, at the project root, run `mocha`, all test cases should be passed

Counter
-------------
A Counter is a collection for counting indexable objects. such as an array or even a string

### constructor
the constructor accept a indexable object as a parameter; otherwise, it will cause an error.

```js
var data = [1,2,3,4,1,3,3];
var count = new _.Counter(data);
count[1] ====> 2
count[2] ====> 1
count[3] ====> 3
count[4] ====> 1
```

### elements
return the same arrary except ordering; it has an optional parameter, which is a function for casting the element.



### subtract
subtracted from counter;

```js
var data = [1,2,3,4,1,3,3];
var count = new _.Counter(data);
var anotherCounter = new _.Counter([1,1,1,2,3,5])
count.subtract(anotherCounter);

count[1] ===> -1
count[2] ===> 0
count[3] ===> 2
count[4] ===> 1
count[5] ===> -1
```

Set
------------

### construct


### add


### remove

### has


### clear

Extra
-----------

### fillArray
this function will return a array which is filled with the `value`s, the length is `len`.

```js
_.fillArray = function(value, len) {
    var arr = [],
        i;
    for (i=0; i < len; i++) {
        arr.push(value);
    };
    return arr;
}
```











