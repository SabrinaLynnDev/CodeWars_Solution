/**Is the string uppercase?
Description:

Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True


 */

//prep

//p-> string 
//r-> true or false 

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}