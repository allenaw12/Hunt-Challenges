    //Day 10 (Posted Nov 1, due Nov 1)
//Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//function will take in a string, there can be too many spaces, letters will only be english letters. do not trim or remove whitespace
function swapUpperLower(str){
    //make str into array, and reverse array
    //for each letter in array, if it's equal to lowercase, replace with uppercase, vice versa, otherwise use og value
    //map to new array
    //return join
    let reversedChecked = str.split(' ').reverse().join(' ').split('').map(val => {
        if(val === val.toLowerCase()){
            return val.toUpperCase()
        }else if(val === val.toUpperCase()){
            return val.toLowerCase()
        }else{
            return val
        }
    })
    return reversedChecked.join('')
}
//returns a changed input string, by reversing capitalization and order of words in string
console.log(swapUpperLower("  Dtcw Jvfe   Kxjo     Tsjl   Dur   Vxm Aca     C"), "c     aCA vXM   dUR   tSJL     kXJO   jVFE dTCW  ")
console.log(swapUpperLower("  Dtcw Jvfe   Kxjo     Tsjl   Dur   Vxm Aca     C")==="c     aCA vXM   dUR   tSJL     kXJO   jVFE dTCW  ")
console.log(swapUpperLower("Example Input"), "iNPUT eXAMPLE")