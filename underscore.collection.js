var _ = require("underscore");


_.collections = {}
var _id = 0;
var _id_key = "__id";

// core-js => _meta.js
_.collections.fastKey = function(obj) {
    if(_.isString(obj)){
        return "S" + obj;
    }

    if(_.isObject(obj)){
        if(!_.has(obj, _id_key)){
            obj[_id_key] = _id ++ ;
        }
        return obj[_id_key];
    }
    return obj;
}





// inject colletions
require("./collections/counter")
require("./collections/deque") // this one need to be implemented by doublelinkedlist
require("./collections/linkedlist")
require("./collections/extra")
require("./collections/set")
require("./collections/ordereddict")


