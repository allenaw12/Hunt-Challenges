    //Day 32
//Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The value of 0! is 1.
// #Your task
// You have to create the function factorial that receives n and returns n!. You have to use recursion.

//parameters take in a number integer, non-negative, 0 or greater
function memoize(){
    let memo = {}
return (num)=>{
    //loop
    //if(num===0)return 1
    //let nums = []
    //for(let i=1;i<=num;i++){
    //nums.push(i)
    //}
    //return nums.reduce((a,c)=>a*c,1)

    //recursion
    //if num is 0 or 1, return 1
    //otherwise return num times factorial num-1
    // if(num === 0 || num === 1) return 1
    // return num * factorial(num-1)

    //memo?
    if(memo[num]){
        console.log('memoed!', memo)
        return memo[num]}
    else if(num === 0 || num === 1){
        console.log('1 or 0')
        memo[num] = 1
        return 1}
    else{
        console.log('memoizing and recursing', num)
        return memo[num] = num * factorial(num-1)
        //return num * factorial(num-1)
    }
}}
//returns the product of all numbers less than n multiplied together, if num is 0 return 1
let factorial = memoize()

console.log(factorial(0), 1)
console.log(factorial(5), 120)
console.log(factorial(10), 3628800)

// console.log(factorial(0), 1)
// console.log(factorial(5), 120)
// console.log(factorial(10), 3628800)

    //Day 33
//can solve factorial with loop as well...
//speed and overall complexity
//loop will be better and faster than recursion UNTIL you add memoization
