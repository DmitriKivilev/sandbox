// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



function solution(str){
    let wordSnake = ""
    for (let index = (str.length - 1); index >= 0; index--) {
    wordSnake += str[index] 
    
  }
return wordSnake
}
console.log(solution("world"))