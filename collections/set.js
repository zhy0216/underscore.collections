var _ = require("underscore");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

_.Set = function(arraryData) {
    var self = new Object();
    var dict = {};
    var __ = new Object();
    var _length = 0;
    function lengthAdd(v){
        _length += v;
        self.length = _length;
    }


    function init() {
        arraryData = arraryData || []
        _.each(arraryData, function(v, i) {
            self.add(v);
        })
    }

    self._hash = _.collections.fastKey;

    self.add = function(v) {
        var v = self._hash(v);

        if (!self._has(v)) {
            dict[v] = __;
            lengthAdd(1)
        }
        return self;
    }
    self.remove = self.discard = function(v) {
        var v = self._hash(v);
        if (self._has(v)) {
            delete dict[v]
            lengthAdd(-1)
        }
        return self;
    }
    self.clear = function() {
        dict = {}
        lengthAdd(-_length)
        return self;
    }
    self._has = function(hash) {
        return dict[hash] === __;
    }
    self.has = function(v) {
        var v = self._hash(v);
        return dict[v] === __;
    }
    init();
    return self;
}