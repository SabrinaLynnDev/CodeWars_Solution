/**Find numbers which are divisible by given number

 * 
 * Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

 * 
 * 
 */



//solution 1:

    return numbers.filter(n => n % divisor === 0)
  }

//solution 2:
function divisibleBy(numbers, divisor) {
let divisible = [];
for (let i = 0; i < numbers.length; i++){
  if (numbers[i] % divisor === 0){
   divisible.push(numbers[i]);
  }
} 

return divisible;
}