var _ = require("underscore");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

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