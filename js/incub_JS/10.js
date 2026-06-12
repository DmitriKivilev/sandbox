// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    let sumArr = 0;
    for (let index = 0; index < marks.length; index++) {
        sumArr += marks[index]
  }
  return Math.floor(sumArr / marks.length)
}
console.log(getAverage([34, 15, 88, - 999]))