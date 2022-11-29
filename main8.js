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
