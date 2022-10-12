//Day one (posted Oct 11, due Oct 12)
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//number parameter, whole number? will ever negative or decimal? at least 1 in value?
//return the list from integers from 1 to given number, array
    //when integer is divisible by 3, print "Fizz", when it's divisible by 5 "Buzz", if divisible by both print "Fizz Buzz"
//10 => [1, 2, "Fizz", 4 ,"Buzz" , "Fizz", 7 ,8,"Fizz", "Buzz"]
//16 => [1, 2, "Fizz", 4 ,"Buzz" , "Fizz", 7 ,8,"Fizz", "Buzz",11,"Fizz",13,14,"Fizz Buzz",16]
function fizzBuzz(num){
    //print all numbers from 1 to the num
    //loop thru numbers, check if divisible by 3, or 5, or both 3 and 5
    //if divisible by 3, replace with "Fizz", by 5 replace with "Buzz", or by both replace with "Fizz Buzz"
    //return array of numbers and string of Fizz and Buzz
    // let numbers = []
    // for(i=1; i<= num; i++){
    //     numbers.push(i)
    // }
    // let fizzBuzz = numbers.map(num => {
    //     if(num%3 === 0 && num%5 === 0){
    //         return 'Fizz Buzz'
    //     }else if(num%3 === 0){
    //         return 'Fizz'
    //     }else if(num%5 === 0){
    //         return 'Buzz'
    //     }else{
    //         return num
    //     }
    // })
    // return fizzBuzz
    let numbers =[]
    for(i=1; i<=num; i++){
        numbers.push(i%3===0 && i%5===0 ? 'Fizz Buzz' : i%3===0 ? 'Fizz' : i%5===0 ? 'Buzz' : i)
    }
    return numbers
}

console.log(fizzBuzz(10), '[1, 2, "Fizz", 4 ,"Buzz" , "Fizz", 7 ,8,"Fizz", "Buzz"]')
console.log(fizzBuzz(16), '[1, 2, "Fizz", 4 ,"Buzz" , "Fizz", 7 ,8,"Fizz", "Buzz",11,"Fizz",13,14,"Fizz Buzz",16]')
