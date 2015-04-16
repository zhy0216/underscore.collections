! function(root, underscore) {
    'use strict';
    var _ = underscore;

    _.fillArray = function(value, len) {
        var arr = [],
            i;
        for (i = 0; i < len;

            i++) {
            arr.push(value);
        };
        return arr;
    }
    _.Counter = function(arraryData) {
        var self = {},
            i, // for loop index
            length, // for loop length
            value // fetch the array value by index;

        self._dict = {};
        for (i = 0, length = arraryData.length; i < length;

            i++) {
            value = arraryData[i];

            if (value in self._dict) {
                self._dict[value]++;
            } else {
                self._dict[value] = 1;
            }
        }
        _.each(self._dict, function(v, k) {
            self[k] = v;
        });

        // typef is a function which is used to cast value type
        self.elements = function(typef) {
            var array = [];

            _.each(self._dict, function(v, k) {
                array = array.concat(_.fillArray(k, v));
            })
            if (typef) {
                console.log(array)
                return _.map(array, typef);
            }
            return array;
        }
        self.mostCommon = function(n) {
            // user orderdictionary
            var result = _.pairs(self._dict);

            result = _.sortBy(result, function(x) {
                return -x[1];
            });

            if (n) {
                result = result.slice(0, n);
            }
            return result
        }
        self.subtract = function(anotherCounter) {
            _.each(anotherCounter._dict, function(v, k) {
                if (k in self._dict) {
                    self[k] -= v;
                } else {
                    self[k] = -v;
                }
            })
        }
        // TODO
        self.update = function(arraryData) {}
        self._get_counter = function(key) {
            return self._dict[key] || 0;
        }
        return self;
    }
    //



    // reconsider 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // use dict to simulate a set is not right because the key in js's dict
    // is always string.

    _.Set = function(arraryData) {
        var self = {};
        var __ = new Object();

        function init() {
            arraryData = arraryData || []
            _.each(arraryData, function(v, i) {
                self.add(v);
            })
        }
        self._hash = JSON.stringify;

        self.add = function(v) {
            var v = self._hash(v);

            if (!self._has(v)) {
                self[v] = __;
            }
            return self;
        }
        self.remove = self.discard = function(v) {
            var v = self._hash(v);

            if (self._has(v)) {
                delete self[v]
            }
            return self;
        }
        self._remove = function(hash) {
            if (self._has(hash)) {
                delete self[hash]
            }
            return self;
        }
        self.clear = function() {
            console.log("clear:" + self)
            _.each(self, function(v, k) {
                if (self._has(k)) {
                    self._remove(k);
                }
            })
            return self;
        }
        self._has = function(hash) {
            return self[hash] === __;
        }
        self.has = function(v) {
            var v = self._hash(v);
            return self[v] === __;
        }
        init();
        return self;
    }
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

    /* An OrderedDict is a dict that remembers the order that 
     keys were first inserted. 
     If a new entry overwrites an existing entry,
     the original insertion position is unchanged
      */
    _.OrderedDict = function() {
        var self = {};

        self._dict = {};
        self._keys = [];
        //key in order
        self.length = 0;

        self.put = function(k, v) {
            if (!(k in self._dict)) {
                self._dict[k] = v;
                self._keys.push(k);
                self.length++;
            }
            return self;
        }
        //http://ejohn.org/blog/javascript-array-remove/
        self._key_remove = function(from, to) {
            var rest = self._keys.slice((to || from) + 1 || self._keys.length);
            self._keys.length = from < 0 ? self._keys.length + from : from;
            return Array.prototype.push.apply(self._keys, rest);
        };

        self.remove = function(k) {
            if (k in self._dict) {
                self._key_remove(self._keys.indexOf(k));
                delete self._dict[k];
                self.length--;
            }
            return self;
        }
        self.get = function(k) {
            if (self.hasKey(k)) {
                return self._dict[k];
            }
            return undefined;
        }
        self.keys = function() {
            return self._keys;
        }
        self.hasKey = function(k) {
            return _.filter(self._keys, function(x) {
                return x === k;
            }).length != 0;
        }
        return self;
    }
}
(this, require("underscore"));