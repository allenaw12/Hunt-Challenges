    //Day 7 (posted on ..., due on ...)
//Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

//parameters take in an array of arrays with numbers in them. can they have values other than numbers?(does it matter?) is the array of arrays always a certain length or can it vary? Can the inner arrays vary in length? (yes)
function uniqueArray(arr){
    //OG THOUGHT BEFORE STANDUP: loop thru each subarray to find any duplicates, then loop thur unique arrays and push those to an empty array variable, then return the length of that(if there was unknown number of subarrays I don't know how to handle that...)
    //NOTE: from standup, quickest way to find number of unique arrays is to multiply lengths of subarrays with only unique values in them
    //So, make a Set(pulls all unque elements from an array) from given subArrays, so you'd have arr.length number of sets of unique values
    //then since Set is an object type value, length doesn't work, but it can take size and return how many values are inside it
    //using size, mulitiply the sizes of all the unique subarrays from given array of arrays and return that product
    return arr.map(sA=> new Set(sA)).reduce((a, c) => a * c.size, 1)
}
//return a number, the count of unique arrays that can be made from given subarrays
//examples
console.log(uniqueArray([[1,2],[4],[5,6]]),"4")
console.log(uniqueArray([[1,2],[3,4],[5,6]]),"8")
console.log(uniqueArray([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),"72")

    //Day 8 (posted Oct 26, due Oct 27)
//Given an array of integers , Find the Nth smallest element in this array of integers.
// Notes
// Array/list size is at least 3 .
// Array/list's numbers could be a mixture of positives , negatives and zeros .
// Repetition in array/list's numbers could occur , so don't Remove Duplications .
// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

//parameters take in an array of integers of size at least 3 long. will there ever be negative numbers? (yes) ok, how about decimal numbers? (no) or any other value types? (nope) and will also take in an integer, will the integer ever be invalid(bigger than given array)? (no)
function nthSmallest(arr, n){
    //find nth smallest number in given array
    //sort arr from smallest to largest, return the nth value === (index+1), return sorted array value-1
    //arr.sort sorts in place so....make a copy
    let sorted = arr.slice().sort((a,b) => a-b)
    return sorted[n-1]
}
//return the value of the nth element in the array, can i mutate original array, or should i make a copy and mutate that? (make copy)
//examples
console.log(nthSmallest([3,1,2],2), "2")
console.log(nthSmallest([15,20,7,10,4,3],3), "7")
console.log(nthSmallest([15,20,7,10,4,3],3), "7")
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92],5), "92")

    //Day 9 (posted Oct 26, due Oct 27)
//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//parameters take in a string, can have letters integers or special characters. can it ever be empty?
function replaceWithParens(str){
    //create new string from current string(map) -map works on array, so change to array
    //check if current value of string is repeated anywhere, make uniform capitalization(to lowercase)
    //if value unique, replace with (, if repeated, replace with )
    //return new string
    let checked = str.toLowerCase().split('').map(el => str.indexOf(el) === str.lastIndexOf(el) ? "(" : ")")
    return checked.join('')
}
//returns a string of parens, characters replaced by left paren if unique, or a right paren if repeated
console.log(replaceWithParens("din"), "(((")
console.log(replaceWithParens("Success"), ")())())")
console.log(replaceWithParens("recede"), "()()()")