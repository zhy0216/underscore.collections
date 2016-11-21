var _ = require("underscore");
/* An OrderedDict is a dict that remembers the order that 
 keys were first inserted. 
 If a new entry overwrites an existing entry,
 the original insertion position is unchanged
  */
_.OrderedDict = function() {
    var self = {};

    self._dict = {};
    self._keys = [];
    // change 
}
