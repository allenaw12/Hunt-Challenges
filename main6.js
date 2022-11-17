    //Day 14(posted Nov 14, due Nov 14)
//You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers.
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//parameter is an array of 3 distinct numbers, (thus numbers never repeat? no). are the numbers always integers, not decimals? yes, are there ever negative numbers? no, are there ever values besides numbers? no

function gimme(arr){
    //find the index of the middle number when the array is sorted in order, can use findindex
    //return arr.findIndex((el, i, array) => el === array.sort((a,b) => a-b, 0)[1])

    //we could make this separate pieces and use index of instead
    let mid = arr.slice().sort((a,b) => a-b, 0)[1]
    return arr.indexOf(mid)
}

//returns a number representing the index of the number from the given array that is the middle value when the elements are sorted highest to lowest or vice versa
console.log(gimme([2, 3, 1]), "0")
console.log(gimme([5, 10, 14]), "1")

    //Day 15 (posted Nov 15, due Nov 15)
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

//parameters take in an array of numbers, can be any length. will it ever be an empty array? no, will the numbers always be whole and positive? yes. can there ever be other value types? no, should i mutate the original array? no

function sortArray(arr) {
    //filter a new array and sort it with only odd numbers
    //map for a new array, if number is even, just return number
        //if number odd, have a declared index variable starting at 0, return that index from sorted odd numbers, add 1 to index
    //return that new mapped array
    // let odds = arr.filter(el => el % 2 !== 0).sort((a,b) => a-b, 0)
    // let i = -1
    // let result = arr.map(val => {
    //     if(val % 2 === 0){
    //         return val
    //     }else{
    //         i++
    //         return odds[i]
    //     }
    // })
    // return result

    // let odds = arr.filter(el => el % 2 !== 0).sort((a,b) => a-b,0)
    // return arr.map(val => val %2 === 0 ? val : odds.shift())

    //leon more optimized version
    //el % 2 return truthy if not even, so don't need not equal
    //sort b-a makes descending order and allows pop to be used which is more time efficient than shift
    const odds = arr.filter(el => el % 2).sort((a,b) => b-a)
    return arr.map(val => val % 2 ? odds.pop() : val)
}
//return an array from input array where odd numbers are in ascending order and even numbers are in their original indices in given array

console.log(sortArray([7,1]), "1,7")
console.log(sortArray([5,8,6,3,4]), "3,8,6,5,4")
console.log(sortArray([9,8,7,6,5,4,3,2,1,0]), "1,8,3,6,5,4,7,2,9,0")
console.log(sortArray([5,3,1,8,0]), "1,3,5,8,0")

    //Day 16 (Posted Nov 16, due nov 17)
//Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
// A few examples:
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

//parameter takes in an array of strings, of length over 1. will the value always be strings? yes

function toAverageLength(arr){
    //
}

//return an array of strings that are all length of the average length of input array strings
console.log(toAverageLength(['u', 'y']), "['u', 'y']")
console.log(toAverageLength(['aa', 'bbb', 'cccc']), "['aaa', 'bbb', 'ccc']")
console.log(toAverageLength(['aa', 'bb', 'ddd', 'eee']), "['aaa', 'bbb', 'ddd', 'eee']")
