
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





  _.OrderDictionary = function(dict, key){





  }



}(this, require("underscore"));