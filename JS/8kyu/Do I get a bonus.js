/**Do I get a bonus?
 * 
 * Description:
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, 
the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive 
as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), 
"$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
 * 
 */



//parameter are    salary -> int 
//                 bonus-> boolean

//return should be int 

//Solution 1:
function bonusTime(salary, bonus) {
    // your code here
      if (bonus) 
      return "£"+ (salary*10).toString();
      
      else return "£"+salary.toString();
 }

 
//Solution 2:
function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
  }