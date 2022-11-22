    //Day 17(posted Nov 21, due Nov 21)
//Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

//parameters take in a string of words, are they always the same case? will it ever be something besides strings?
function removeDupeWords(str){
    //check that current word does not match word before it, if it does, don't include it in new array
    //want to use filter method, make into arr of words
    return str.split(' ').filter((word, index, arr) => word !== arr[index-1]).join(' ')
}
//returns a filtered string of words with no consecutive duplicate words
console.log(removeDupeWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta") === "alpha beta gamma delta alpha beta gamma delta")
