var _ = require("underscore");

_.fillArray = function(value, len) {
    var arr = new Array(len),
        i;
    for (i = 0; i < len; i++) {
        arr[i] = value
    };
    return arr;
}