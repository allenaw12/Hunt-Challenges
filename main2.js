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

//parameters takes in an array of numbers, it will never empty. 
function getAverage(arr){
    //get the average of numbers in given array
    //to get an average, we will sum all the numbers, then divide by length of array
    //return the average, rounded down to nearest integer (Math.floor())
    // let sum = 0
    // for(i=0; i<arr.length; i++){
    //     sum += arr[i]
    // }
    // return Math.floor(sum/arr.length)
    let sum = arr.reduce((total, curr) => total+curr, 0)
    return Math.floor(sum/arr.length)
}
//return a number that is average of all the numbers in the input array
console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3)
console.log(getAverage([1,1,1,1,1,1,1,2]),1)

//Day five (posted Oct 19, due Oct 20)
//You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

//parameters take in an array of numbers, there will be 2 numbers that are only listed once, the rest are listed twice
function repeats(arr){
    //get single numbers out of array
    //add those single numbers together
    let singles = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
    return singles.reduce((a,b) => a+b, 0)
}
//return sum of the single listed numbers
console.log(repeats([4,5,7,5,4,8]), "15")
console.log(repeats([9, 10, 19, 13, 19, 13]),"19")
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),"12")
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),"22")
console.log(repeats([5, 10, 19, 13, 10, 13]),"24")

    //Day six (posted oct 21, due oct 21, friday!)
//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]