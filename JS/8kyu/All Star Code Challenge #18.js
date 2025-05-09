/**All Star Code Challenge #18

Description:
Create a function that accepts a string and a single character, 
and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
 * 
 */

//p -> string and single char
//r -> int 
//e
//p

/*function strCount(str, letter){  
    //code here
    //str.split 
    //letter => if letter in str 
    //       => or equal ...? if letter === str.split etc 
    //          
    //        return i++ 
    
    

  }
    */

//solution 1:
function strCount(str, letter){  
    return str.split(letter).length-1
}

//solution 2:
function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
}