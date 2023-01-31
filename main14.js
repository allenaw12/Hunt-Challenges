    //Day 34
//Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

//parameters take 2 integers, always greater or equal to 1
let mygcd = (int1, int2) => {
    //brute force, no recursion
    //set 2 arrays, empty, and for loop thru numbers to divide into 2 integers
    //sort arrays and filter commons between both
    //return highest number from filtered array
    let divisors1 = []
    let divisors2 = []
    for(i=1;i<Math.max(int1,int2);i++){
        let div1 = int1/i
        let div2 = int2/i
        if((!divisors1.includes(div1) || !divisors1.includes(i)) && Number.isInteger(div1)){
            divisors1.push(div1)
            divisors1.push(i)}
        if((!divisors2.includes(div2)  || !divisors2.includes(i)) && Number.isInteger(div2)){
            divisors2.push(div2)
            divisors2.push(i)}
    }
    let larger = Math.max(divisors1.length, divisors2.length)
    let smaller
    if(larger === divisors1.length){
        larger = divisors1
        smaller = divisors2
    }else{
        larger = divisors2
        smaller = divisors1
    }
    let common = larger.filter(el => smaller.includes(el))
    return common.sort((a,b)=>b-a)[0] || 1
}
//returns the highest common divisor of the 2 given numbers, at least 1
console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)
