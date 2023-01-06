    //Day 30
//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//parameters take in a number, 0 or greater, whole integers
let memo = []
let fibonacci = (n) => {
    //basic for loop fibonacci
    //declare a fibonacci array starting with 0 and 1 in their respective indices
    //for loop while i is 2 and less than or equal to n, add previous 2 indices and add to array
    //return n index of array
    let fibby = [0,1]
    for(i=2; i<=n; i++){
        fibby.push(fibby[i-1]+fibby[i-2])
    }
    return fibby[n]

    // //recursion version
    // if(n<2){
    //     return n
    // }else{
    //     return fibonacci(n-1) + fibonacci(n-2)
    // }

    // //memoization
    // if(n <2){
    //     return n
    // }else if(memo[n]){
    //     return memo[n]
    // }else{
    //     let result = fibonacci(n-1) + fibonacci(n-2)
    //     memo[n] = result
    //     return result
    // }
}
//returns the nth number of the sequence
console.log(fibonacci(2), 1)
console.log(fibonacci(3), 2)
console.log(fibonacci(4), 3)
console.log(fibonacci(10), 55)

    //Day 30
//talking recursion: remember to have a 'base case' and a recursive case
//-base case is like an out, stop running the loop

    //Day 31
//talking about memoization: we were late after movie lol
//memoize != memorize XD
//recurse fib
// let recurFib = (n) => {
//     let result
//     if(n ===1 || n === 2){
//         result = 1
//     }else{
//         result = recurFib(n-1) + recurFib(n-2)
//     }
//     return result
// }
// console.log(recurFib(5), 5)

//memo fib
var cache = {}
let fib = (n) => {
    let memoFib = (n,cache) => {
        console.log('call',cache)
        let result
        if(cache[n]){
            console.log('cached', n)
            return cache[n]
        }else if(n === 1 || n === 2){
            result = 1
        }else{
           console.log('else',n)
            result = memoFib(n-1, cache) + memoFib(n-2, cache)
        }
    cache[n] = result
    return result
    }
    return memoFib(n, cache)
}
console.log(fib(5), 5)
console.log(fib(5), 5)
console.log(fib(10),55)

//bottom up

