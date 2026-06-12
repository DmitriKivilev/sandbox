// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// /Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// Вы можете предположить, что для целей этой ката, предоставленный массив не будет пустым.


function findSmallestInt(arr) {
    let minVal = arr[0]
    for (let index = 0; index < arr.length; index++) {
    if (arr[index] < minVal) {
        minVal = arr[index]
    }
  }
  return minVal
}
console.log( findSmallestInt([34, 15, 88, - 999]))