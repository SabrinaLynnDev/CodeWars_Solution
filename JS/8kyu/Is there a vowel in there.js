/*Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.


*/

//solution 1:
function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}

//solution 2:
const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

//solution 3:
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)