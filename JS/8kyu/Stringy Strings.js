/*Stringy Strings
 * 
 * Description:
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
 */


//Solution 1: 
function stringy(size) {
    // your code here   
    //p positive int
    //r only 1 and 0 and start with 1 
    //r -> string of num
    
    var str='';
    for( var i=1; i<=size; i++ )
        str+=i%2;
    return str;
    
}

//solution 2:
function stringy(size) {
  const stringy = x => ''.padStart(x,'10');
}

//solution 3:
function stringy(size) {
    const stringy = size => "10".repeat(size).slice(0,size);
}