underscore.collections
======================

**under development**

[ ] add linkedlist
[ ] add doubledlinkedlist
[ ] add heap
[ ] add hashheap
[ ] add unionfind
[ ] add trie
[ ] add segment tree (2d version ???)
[ ] change ordereddict
[ ] try b-tree?
[ ] complete testcases
 
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

Deque
------------
Deques are a generalization of stacks and queues (the name is pronounced “deck” and is short for “double-ended queue”). 

### construct
`parameter`: **array**

### append
`parameter`: **value**

Add value to the right side of the deque

### appendleft
`parameter`: **value**

Add value to the left side of the deque

### clear

Remove all elements from the deque leaving it with length 0

### count 
`parameter`: **value**

Count the number of deque elements equal to value. If not parameter provides, it will return 0;

### extend
`parameter`: **array**

Extend the right side of the deque by appending elements from the iterable argument.

### extendleft
`parameter`: **array**

Extend the left side of the deque by appending elements from the iterable argument.

### reverse

Reverse the elements of the deque in-place

### length

Get the length of the deque

Set
------------
Set is for constructing and manipulating unordered collections of unique elements.

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

OrderedDict
------------
An OrderedDict is a dict that remembers the order that keys were first inserted. If a new entry overwrites an existing entry, the original insertion position is unchanged

### put
`parameter`: **key**, **value**

if the key is in the ordereddict, then nothing happened; otherwise, it will insert the key and value into the ordereddict;

### remove
`parameter`: **key**

remove a key-value by key; if the key is not in the ordereddict, nothing happened; 

### keys

return an array which contains the keys in the inserting ordered.

### get
`parameter`: **key**

return a value by key; if key is not in the ordereddict, the function will return `undefined`;

### hasKey
`parameter`: **key**

check if a key exists;

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











