
!function(root, underscore){
  'use strict';
  var _ = underscore;
  _.Counter = function(arraryData){
        var dict = {},
            i, // for loop index
            length, // for loop length
            value; // fetch the array value by index
        for(i=0, length=arraryData.length; i < length; i++){
            value = arraryData[i];
            if(value in dict){
                dict[value]++ ;
            }else{
                dict[value] = 1;
            }
        }

        return dict;
  }// 

  _.OrderDictionary = function(dict, key){

        



  }



}(this, require("underscore"));