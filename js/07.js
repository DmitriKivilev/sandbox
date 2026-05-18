//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. 
// Return your answer as a number.

function sumMix(x){
  let funSum = 0
  for (let index = 0; index < x.length; index++) {
    funSum += Number(x[index])
 }
return funSum
}