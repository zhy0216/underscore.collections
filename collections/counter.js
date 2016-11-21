var _ = require("underscore");

_.Counter = function(arraryData) {
    var self = {},
        i, // for loop index
        length, // for loop length
        value // fetch the array value by index;

    self._dict = {};
    for (i = 0, length = arraryData.length; i < length; i++) {
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