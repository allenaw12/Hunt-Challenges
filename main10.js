    //Day 25
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//parameters take in an array of nums, can it have other value types? no can it be empty? no
function appearTwice(arr){
    // //method/brute force way
    // //reduce method to create object
    // //filter into new array
    // //if array, return true, otherwise false
    // let counts = arr.reduce((acc, curr)=>{
    //     if(acc[curr] in acc){
    //         acc[curr]++}
    //     else{
    //         acc[curr] = 1}
    //         return acc
    //     }, {})
    // let aboveOne = Object.values(counts).filter(val => val > 1,[])
    // return aboveOne.length ? true : false
    //create object cache to store values and counts of values
    //use for loop
    //use for in loop, go thru obj, if val is greater than 1, return true
    //otherwise return false
    const numCounts = {}
    for(num of arr){
        numCounts[num] = numCounts[num] + 1 || 1
    }
    for(count in numCounts){
        if(numCounts[count] > 1) return true
    }
    return false
}
//return boolean true if one or more numbers appear more than once, false if all numbers are unique
console.log(appearTwice([1,2,3,1]),"true")
console.log(appearTwice([1,2,3,4]),"false")
console.log(appearTwice([1,1,1,3,3,4,3,2,4,2]),"true")