underscore.collections
======================

**under development**

A underscore extension which provides some useful data structure, inspred by [python collection](http://docs.python.org/2/library/collections.html)

click [here](http://zhy0216.github.io/underscore.collections/) to see a flatdoc.

click [here](https://raw.githubusercontent.com/zhy0216/underscore.collections/master/README.md) to see .md source code.


For test
-------------
* `npm install mocha`
* `npm install underscore`

Then, at the project root, run `mocha`, all test cases should be passed

Counter
-------------
A Counter is a collection for counting indexable objects. such as an array or even a string

### constructor
`parameter`: **array**

the constructor accept a indexable object as a parameter; otherwise, it will cause an error.

```js
var data = [1,2,3,4,1,3,3];
var count = new _.Counter(data);
>>> count[1]
2

>>> count[2]
1

>>> count[3]
3

>>> count[4]
1
```

### elements
return the same arrary except ordering; it has an optional parameter, which is a function for casting the element.


### subtract
`parameter`: **count**

subtracted from counter;

```js
var data = [1,2,3,4,1,3,3];
var count = new _.Counter(data);
var anotherCounter = new _.Counter([1,1,1,2,3,5])
count.subtract(anotherCounter);

>>> count[1]
-1

>>> count[2]
0

>>> count[3]
2

>>> count[4]
1

>>> count[5]
-1
```

Set
------------

### construct
`parameter`: **array**

### add
`parameter`: **value**

add a element, it is chain-call.

```js
var set = new _.Set([1,2,2,4]);

>>> 1 in set
true

>>> 7 in set
false

// after run the next line
set.add(7)

>>> 7 in set
true
```

### remove
remove a element; if the element is not in the set, nothing happen;

`alias`: **discard**

```js
var set = new _.Set([1,2,2,4]);
>>> 2 in set
true
set.remove(2)

>>> 2 in set
false
```

### has
check if a element in a set

### clear
remove all elements from set

Extra
-----------

### fillArray
`parameter`: **value**, **len**

this function will return a array which is filled with the `value`, the length is `len`.

```js

// source code
_.fillArray = function(value, len) {
    var arr = [],
        i;
    for (i=0; i < len; i++) {
        arr.push(value);
    };
    return arr;
}
```











