// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с его цифрами в порядке убывания. По сути, переставьте цифры, чтобы создать максимально возможное число.

// Примеры:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



// function descendingOrder(n){
//   result = []
//   for (let i = 0;i < String(n).length;i++){
//   result.push(String(n)[i])}
//   result.sort((a, b) => {
//       return b - a
// })
//   return Number(result.join(''))
// }
// console.log(descendingOrder(42145))

function descendingOrder(n){
    return String(n).split('').sort().reverse().join(" ")
}

console.log(descendingOrder(42145))
