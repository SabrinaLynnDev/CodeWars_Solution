/*Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/

function grow(x){
  
        var sum = 1
        for (i = 0; i<x.length; i ++){
          sum = sum*x[i];
        }
        return sum;
      }



