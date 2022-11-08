    //Day 12(posted Nov 7, due Nov 7)
//An ordered sequence of numbers from 1 to N is given. One number might have been deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
// Example:
// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.
// Note: N may be 1 or less (in the latter case, the first array will be []).
// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

//parameters take in 2 arrays, an array of numbers from 1 to N and an array of mixed numbers that are from 1 to N. N can be 1 or less, in which case the array is empty, won't have other value types in array, only integers
function findDeletedNumber(arr1, arr2){
    //check if first array empty, or arrays are equal in every way, return 0
    if(arr1 === [] || arr1.length === arr2.length) return 0
    //go thru arr1, checking that every value is included in arr2, return the value that isn't
    let deleted = arr1.filter(el => !arr2.includes(el))
    return deleted[0]
}
//return the number that was deleted, or 0 if no deletion occured, or array empty
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), "2")
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), "5")
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), "0")

    //Day 13(posted Nov)
//