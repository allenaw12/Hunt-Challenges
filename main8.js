    //Day 18
//You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 
// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

//parameters are an array of strings, will it ever be empty? no, will it ever have other value types? no, should i mutate the original array or make a copy? copy, always lowercase strings? yes
function dup(arr){
    //go thru array and go thru each string and check for duplicate consecutive letters
    //new array with altered strings, using map
    //within map function, string is split, then filter to new string and returned
    //return new array
    let altered = arr.map(string => {
        let removeDups = string.split('').filter((letter, i)=>{
            if(letter !== string[i-1]) return letter
        })
        return removeDups.join('')
    })
    return altered
}
//return an array of strings with not consecutive duplicate letters
console.log(dup(["abracadabra","allottee","assessee"]),'["abracadabra","alote","asese"]')
console.log(dup(["abracadabra","allottee","assessee"]),'["abracadabra","alote","asese"]')
console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),"['codewars','picaniny','hubububo']")
console.log()


    //Day 19
//Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.
// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//parameters take in a string. it will always be a string, all strings will contain all vowels except one. don't need to worry about capitals.
function findMissingVowel(str){
    //put vowels in string variable in indices listed
    //go thru vowels and check if included in string, if not, return index of vowel, break loop
    //return index found
    let vowels = "aeiou"
    let ind
    for(i=0;i<5;i++){
        if(!str.includes(vowels[i])){
            return ind = i
            break} 
    }
    return ind
}
//returning a number from 0-4 representing the index of the missing vowel
console.log(findMissingVowel("John Doe hs seven red pples under his bsket"),"0")
console.log(findMissingVowel("Bb Smith sent us six neatly arranged range bicycles"),"3")
console.log(findMissingVowel("The dnosaur ate t's dnner"),"2")

    //day 20
//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//parameters take in a number as input, number will always be whole and positive and a number
function fizzBuzz(num){
    //declaare an empty array to hold numbers
    //use a for loop i=1, i<= num, i++
    //if i%2 push to array Fizz, if i%3 push to array Buzz, if both i%2 and i%3 push to array Fizz Buzz, otherwise push i
    //return array variable
    let numsArr = []
    // for(i=1; i<=num; i++){
    //     if(i%2===0 && i%3===0){
    //         numsArr.push('Fizz Buzz')
    //     }else if(i%3===0){
    //         numsArr.push('Buzz')
    //     }else if(i%2===0){
    //         numsArr.push('Fizz')
    //     }else{
    //         numsArr.push(i)
    //     }
    // }
    let i=1
    while(i<=num){
        if(i%2===0 && i%3===0){
            numsArr.push('Fizz Buzz')
        }else if(i%3===0){
            numsArr.push('Buzz')
        }else if(i%2===0){
            numsArr.push('Fizz')
        }else{
            numsArr.push(i)
        }
        i++
    }
    return numsArr
}
//returns a list/array of numbers from 1 to given number and words when num value is divisible by 2 or 3 or both
console.log(fizzBuzz(3),"1, Fizz, Buzz")
console.log(fizzBuzz(6),"1, Fizz, Buzz, Fizz, 5, Fizz Buzz")
console.log(fizzBuzz(12),"1, Fizz, Buzz, Fizz, 5, Fizz Buzz, 7, Fizz, Buzz, Fizz, 11, Fizz Buzz")
//check exact equal
console.log(fizzBuzz(3).join(', ')==="1, Fizz, Buzz")
console.log(fizzBuzz(6).join(', ')==="1, Fizz, Buzz, Fizz, 5, Fizz Buzz")
console.log(fizzBuzz(12).join(', ')==="1, Fizz, Buzz, Fizz, 5, Fizz Buzz, 7, Fizz, Buzz, Fizz, 11, Fizz Buzz")

    //day 21
//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

//parameters take in a string. always at least 1 char, no other value types. 
function reverseChars(str){
    //do not use reverse method!
    // //create an empty catcher array
    // //forEach loop on string split unshift the letter into the catcher array
    // //return joined array
    // let reversedArr = []
    // str.split('').forEach(el=>reversedArr.unshift(el))
    // return reversedArr.join('')
    // //can we use map with it's 3 parameters?
    // return str.split('').map((el, i, arr)=>arr[arr.length-1-i]).join('')
    //leon's slick solution
    let reverseStr = ""
    for(let char of str){
        reverseStr=char+reverseStr
    }
    return reverseStr
}
//return a string of input string in reverse order
console.log(reverseChars('hello'),'olleh')
console.log(reverseChars('my name is'),'si eman ym')
console.log(reverseChars('Oh SHIT'),'TIHS hO')

console.log(reverseChars('hello')==='olleh')
console.log(reverseChars('my name is')==='si eman ym')
console.log(reverseChars('Oh SHIT')==='TIHS hO')