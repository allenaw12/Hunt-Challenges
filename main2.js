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

//Day four(posted Oct 19, due Oct 19)
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)