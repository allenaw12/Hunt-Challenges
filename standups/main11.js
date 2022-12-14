    //Day 29
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
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

//parameters take in a number, will it ever be negative? no do i need to worry about other value types? no decimals? no
const fibonacci = (n) => {
    //intial thought
    //create a for loop that creates the numbers, and loops n number of times, have an array catch numbers
    //return last index of array(index n)
    let arr = [0,1]
    // for(i = 2; i <= n ; i++){
    //     let sum = arr[i-1] + arr[i-2]
    //     arr.push(sum)
    // }
    // let i = 2
    // while(i <= n){
    //     let sum = arr[i-1] + arr[i-2]
    //     arr.push(sum)
    //     i++
    // }
    // return arr[n]

    //leon's solution
    for(let i = 2; i<= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}
//returns a number that is the nth digit in the fibonacci sequence
console.log(fibonacci(2),"1")
console.log(fibonacci(3),"2")
console.log(fibonacci(4),"3")
console.log(fibonacci(7),"13")