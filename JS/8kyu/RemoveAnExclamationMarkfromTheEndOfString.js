/**
 * Description:
Remove an exclamation mark from the end of a string. 
For a beginner kata, you can assume 
that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
 * 
 * 
 * 
 */

//Solution 1:
function remove(s) {
    const remove = s => s.replace(/!$/, '');
}

//solution 2:
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }