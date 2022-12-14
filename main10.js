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
    // const numCounts = {}
    // for(num of arr){
    //     numCounts[num] = numCounts[num] + 1 || 1
    // }
    // for(count in numCounts){
    //     if(numCounts[count] > 1) return true
    // }
    // return false

    //leon's single for loop
    let numsMap = {}
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(numsMap[num]){
        return true
        }else{
        numsMap[num] = true
        }
    }
    return false
}
//return boolean true if one or more numbers appear more than once, false if all numbers are unique
console.log(appearTwice([1,2,3,1]),"true")
console.log(appearTwice([1,2,3,4]),"false")
console.log(appearTwice([1,1,1,3,3,4,3,2,4,2]),"true")

    //day 26
//Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//parameters taking in an array of numbers, no other value types, only whole integers, there will always be a majority element in array
const findMajorityNum = (arr) => {
    //hash map/object cache
    //for loop and make count object
    //have a result to hold largest value, and a result for largest value property
    //return property
    // let counts = {},
    //     value = 0,
    //     prop = true
    
    // for(el of arr){
    //     counts[el] = counts[el] + 1 || 1
    // }
    // for(val in counts){
    //     //console.log("val and counts val, value", val, counts[val], value)
    //     if(counts[val] > value){
    //         value = counts[val]
    //         prop = val}
    //     //console.log("after", value)
    // }
    // return prop

    //leon solution
    let elem = {},
      count = 0,
      majElem = arr[0]
  
    for(const num of arr){
        elem[num] = elem[num] + 1 || 1
        // if(elem[num] > arr.length / 2){
        //     count = elem[num]
        //     majElem = num
        // }
    }
    
    for(const n in elem){
        if(elem[n] > count){
        count = elem[n]
        majElem = n
        }
    } 
    
    return majElem
}
//return the majority number found in given array, will always be there
console.log(findMajorityNum([3,2,3]), "3")
console.log(findMajorityNum([2,2,1,1,1,2,2]),"2")
console.log(findMajorityNum([5,3,4,2,3,3,3,5,3]), "3")
console.log(findMajorityNum([2,1,1,1,1,2,2]), "1")