// Я новичок в кодировании, и теперь я хочу получить сумму двух массивов... На самом деле сумма всех их элементов. Буду благодарен за вашу помощь.

// П.С. Каждый массив содержит только целые числа. Выход тоже число.


function arrayPlusArray(arr1, arr2) {
    let sumArr = 0;
    for (let index = 0; index < arr1.length; index++) {
        sumArr += arr1[index] + arr2[index]
        
    } 
    return sumArr
}
console.log(arrayPlusArray([1,2,3],[1,2,3]))