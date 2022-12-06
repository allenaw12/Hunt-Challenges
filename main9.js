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
//