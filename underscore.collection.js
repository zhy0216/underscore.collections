
!function(root, underscore){
  'use strict';
  var _ = underscore;

  _.fillArray = function(value, len) {
        var arr = [],
            i;
        for (i=0; i < len; i++) {
            arr.push(value);
        };
        return arr;
    }


  _.Counter = function(arraryData){
        var self = {},
            i, // for loop index
            length, // for loop length
            value // fetch the array value by index
            ;

        self._dict = {};

        for(i=0, length=arraryData.length; i < length; i++){
            value = arraryData[i];
            if(value in self._dict){
                self._dict[value]++ ;
            }else{
                self._dict[value] = 1;
            }
        }


        _.each(self._dict, function(v, k){
            self[k] = v;
        });

        // typef is a function which is used to cast value type
        self.elements = function(typef){
            var array = [];
            _.each(self._dict, function(v, k){
                array = array.concat(_.fillArray(k, v));
            })
            if(typef){
                console.log(array)
                return _.map(array, typef);
            }
            return array;
        }

        self.most_common = function(n, typef){
            // user orderdictionary
        }

        self.subtract = function(anotherCounter){
            _.each(anotherCounter._dict, function(v, k){
                if(k in self._dict){
                    self[k] -= v;
                }else{
                    self[k] = -v;
                }

            })
        }

        self.update = function(arraryData){

        }

        self._get_counter = function(key){
            return self._dict[key] || 0;
        }


        return self;
  }//

  _.Set = function(arraryData){
        var self = {};


        function init(){
            arraryData = arraryData || []
            _.each(arraryData, function(v, i){
                self.add(v);
            })
        }

        self.add = function(v){
            if(! self.has(v)){
                self[v] = null;
            }
            return self;
        }

        self.remove = self.discard = function(v){
            delete self[v]
        }

        self.clear = function(){
            _.each(self, function(v, k){
                if(self.has(k)){
                    self.remove(k)
                }
            })
        }

        self.has = function(v){
            return self[v] === null;
        }

        init();

        return self;
  }

  _.Dequeue = function(){
    var self = {};
    var array = [];

    // Add x to the right side of the deque
    self.append = array.push;

    // Add x to the left side of the deque.
    self.append = array.unshift;


    // Remove all elements from the deque leaving it with length 0
    self.clear = function(){
        array = [];
        return self;
    }

    // Count the number of deque elements equal to x.
    self.count = function(x){
        return _.countBy(array, function(n){
                    return n == x;
                })[true];
    }

    // Extend the right side of the deque by appending
    // elements from the iterable argument.
    self.extend = function(anotherArrary){
        array = array.concat(anotherArrary);
        return self;
    }

    // self.extendleft = null

    //Reverse the elements of the deque in-place
    self.reverse = array.reverse;


  }






}(this, require("underscore"));