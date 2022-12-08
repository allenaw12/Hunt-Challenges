    //day 22
//Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.

//parameters take in a string, string can be empty, can there ever be other value types in the string? or besides a string?
function countCharacters(str){
    //intial thought is reduce so lets do it that way first
    // let counts = str.split('').reduce((acc, curr)=> {
    //     if(acc[curr]) acc[curr]++
    //     else acc[curr]=1
    //     return acc},{})
    // return counts

    //another similar way could use forEach loop into an empty obj
    let counts = {}
    str.split('').forEach(char=>{
        if(counts[char]) counts[char]++
        else counts[char]=1
    })

    //another thought/memory is using for of loop with strings, can add to empty object
    
    // for(let char of str){
    //     if(counts[char]) counts[char]++
    //     else counts[char]=1
    // }
    return counts
}
//returns an object of characters in the string as properties and counts of them as values, or an empty object if empty string
console.log(countCharacters(''),"{}")
console.log(countCharacters('aba'),"{'a': 2, 'b': 1}")
console.log(countCharacters('hello'),"{'h': 1, 'e': 1, 'l': 2, 'o': 1}")

    //day 23
//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0
// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

//parameters take in 2 strings, jewels and stones, jewels will always have a length 1 or greater, stones will have a length of 50 or less, jewels' characters will be unique and both strings only consist of english letter. case sensitive, different case of same letter is  different value. can there be other value types? 
function jewelsAndStones(jewels, stones){
    //first thought is filter, if stones includes jewels, filter it, then return length of that new arr
    //return stones.split('').filter(char=>jewels.includes(char)).length

    //next i'm thinking split for each and increment a counter
    // let jewelCount = 0
    // stones.split('').forEach(char=>{
    //     if(jewels.includes(char))jewelCount++})
    // return jewelCount

    //adam suggested an object cache....similar to hashmap like leon suggested
    //for loop for string, for of!
    // const countObj = {}
    // for(let jewel of jewels){
    //     countObj[jewel]=1
    // }
    // for(let stone of stones){
    //     if(countObj[stone]) countObj[stone]++
    // }
    // return Object.values(countObj).reduce((a,b)=>a+b,0) - jewels.length

    //leon's solution
    const map = {}
    let count = 0
    for(const jewel of jewels){
        map[jewel] = true
    }
    for(const stone of stones){
        if( map[stone] ){
            count++
        }
    }
    return count
}
//returns an integer number of the count of stones that match jewels
console.log(jewelsAndStones("z","ZZ"),'0')
console.log(jewelsAndStones("aA","aAAbbbb"),'3')
console.log(jewelsAndStones("bBd","AbrcADaBra"),'2')

    //day 24
//Given a string of characters, return the character that appears the most often.
//describe("Max Character", () => {
//     it("Should return max character", () => {
//      assert.equal(max("Hello World!"), "l");
//     });
//    });
//    No String or Array Methods (well brute force it first, but then no methods)!

//parameters take in a string, can it ever be empty? can there be special characters or other value types given? is it case sensitive? yes
function maxCharacter(str){
    ////brute force way! with methods
    // let counts = str.split('').reduce((acc, curr)=>{
    //     if(acc[curr]) acc[curr]++
    //     else acc[curr]=1
    //     return acc
    // }, {})
    // let max = Math.max(...Object.values(counts))
    // let result = Object.entries(counts).filter(el => el.includes(max)).flat()
    // return result[0]
    
    //non brute force(no methods!) have an empty object, add keys and increment values
    let letters = {}
    for(char of str){letters[char]? letters[char]++ : letters[char] = 1}
    let max = Math.max(...Object.values(letters))
    let i = Object.values(letters).indexOf(max)
    return Object.keys(letters)[i]
}
//returns the character that appears most in the given string as a string
console.log(maxCharacter("Hello World!"),'l')
console.log(maxCharacter("Allena Williamson"),'l')
console.log(maxCharacter("AHAHAHAHAHA!"),'A')
console.log(maxCharacter("Supercalifragilisticexpialidocious"),'i')