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
//