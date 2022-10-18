//Day three (posted Oct 18, due Oct 18)
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

//parameter is an array of integers that can be both strings and numbers
function sumMix(arr){
    // //make sure all values arr are numbers
    // let allNum = arr.map(el => Number(el))
    // //sum all numbers in array down to one value
    // //return value
    // return allNum.reduce((total, curr) => total+curr, 0)
    return arr.map(el => Number(el)).reduce((a,b)=>a+b, 0)
}
//return sum of all the integers in the input array as a number
console.log(sumMix([9,3,'7','3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)