/*Array plus array
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {

   
   let sumArr = 0 
   let sumArr2 = 0
   
   for (i = 0; i < arr1.length; i++){
     sumArr += arr1[i];
   }
   
   for (i = 0; i < arr2.length; i++){
     sumArr2 += arr2[i];
   }
   
   return sumArr + sumArr2
   
 }