/**A wolf in sheep's clothing
 
Description:
Wolves have been reintroduced to Great Britain. You are a sheep farmer, 
and are now plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:


[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
 */

//my solution:   jan.17.25 
//it is wrong bc the index order should be reversed
function warnTheSheep(queue) {
    //prep 
    //p-> array of word of sheep and wolf
    //r-> 1. closest ani 2. sheep N
    let i = 1;
    for (i = 1; i < queue.length; i++){
      if (queue[i] === "wolf" && i === 1){
        return "Pls go away and stop eating my sheep"
      }else (queue[i] === "wolf" && i > 1)
        return "Oi! Sheep number "+ [i - 1]+ "! You are about to be eaten by a wolf!"
    }
  }

//other right solutions:  jan.21.2025
  function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }

  function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}

function warnTheSheep(queue) {
    var sheep = queue.length - queue.indexOf('wolf') - 1
      if (sheep ==0 ){
        return "Pls go away and stop eating my sheep"
      } else {
        return "Oi! Sheep number "+ sheep +"! You are about to be eaten by a wolf!"
      }
  }