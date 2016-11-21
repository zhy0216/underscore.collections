var assert = require("assert");
var _ = require("underscore");
require("../underscore.collection");


// describe('OrderedDict', function() {
//     var od;

//     function init() {
//         od = _.OrderedDict();
//         od.put(1, "one");
//         od.put(2, "two");
//         od.put(3, "three");
//     }


//     describe("#put", function() {
//         init();
//         assert.equal(od.length, 3);
//         od.put(1, "one");
//         assert.equal(od.length, 3);
//         assert.equal(od.get(1), "one");
//         assert.equal(od.keys()[0], 1);
//     })

//     describe("#remove", function() {
//         init();
//         assert.equal(od.length, 3);
//         od.remove(2);
//         assert.equal(od.length, 2);
//     })

//     describe("#hasKey", function() {
//         init();
//         assert.equal(od.hasKey(1), true);
//         assert.equal(od.hasKey("1"), false);
//     })

//     describe("#get", function() {
//         init();
//         assert.equal(od.get(1), "one");
//         assert.equal(od.get(5), undefined);
//         assert.equal(od.get("1"), undefined);
//     })


// })



