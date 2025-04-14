/*
Capitalization and Mutability

Description:
Your coworker was supposed to write a simple helper function 
to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. 
Fix the helper function they wrote so that it works as intended (i.e. 
it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

Examples:
"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"
 * 
 */

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

/**
 * 
 * The slice() method returns a section of the string starting from the charachter 
 * which index we put in the brackets (e.g. if we have 'word' as our string, 
 * word.slice(1) will return 'ord'). The toUpperCase() method takes, 
 * changes and returns only what we give it, in this case word[0], 
 * which is the first character of our string. So in order for our funtion 
 * to return the whole string with a capitalized first character, 
 * we concatenate said capitalized first character with the rest of the original string
 */


