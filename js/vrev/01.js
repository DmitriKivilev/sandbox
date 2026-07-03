// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to 
// the number of digits of each numbers, so, for example:
//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)

function multiply(number){
  //your code here
  const len_num = String(Math.abs(number)).length; 
  return number * (5 ** len_num)
}
console.log(multiply(3))