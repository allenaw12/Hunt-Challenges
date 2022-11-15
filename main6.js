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

    //Day 15 (posted Nov , due Nov )
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])