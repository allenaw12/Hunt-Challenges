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
    // let divisors1 = []
    // let divisors2 = []
    // for(i=1;i<Math.max(int1,int2);i++){
    //     let div1 = int1/i
    //     let div2 = int2/i
    //     if((!divisors1.includes(div1) || !divisors1.includes(i)) && Number.isInteger(div1)){
    //         divisors1.push(div1)
    //         divisors1.push(i)}
    //     if((!divisors2.includes(div2)  || !divisors2.includes(i)) && Number.isInteger(div2)){
    //         divisors2.push(div2)
    //         divisors2.push(i)}
    // }
    // let larger = Math.max(divisors1.length, divisors2.length)
    // let smaller
    // if(larger === divisors1.length){
    //     larger = divisors1
    //     smaller = divisors2
    // }else{
    //     larger = divisors2
    //     smaller = divisors1
    // }
    // let common = larger.filter(el => smaller.includes(el))
    // return common.sort((a,b)=>b-a)[0] || 1

    //recursion you say....
        //first attempt
    // let max=Math.max(int1, int2)
    // let min=Math.min(int1, int2)
    // console.log(max, min)
    // if(max % min === 0){
    //     //console.log(min)
    //     return min
    // }else{
    //     console.log(max%min)
    //     return mygcd(max, max%min)
    // }

    //leon's quick not recursion
    // for(let i = Math.min(int1,int2); i > 0; i--){
    //     if( int1 % i === 0 && int2 % i === 0  ){
    //       return i
    //     }
    //   }

    //euclidean algorithm
    //larger num = smaller num * (number of times it can go into bigger num) + (remainder)
    if(int1===0){
        return int2
    }else if(int2===0){
        return int1
    }else{
        let order = [Math.max(int1, int2), Math.min(int1, int2)]
        let r = order[0]%order[1]
        return mygcd(order[1], r)
    }
}
//returns the highest common divisor of the 2 given numbers, at least 1
console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)
console.log(mygcd(60,12),12)
console.log(mygcd(10927782,6902514), 846)
console.log(mygcd(1590771464,1590771620),4)

    //Day 35
//recursion with algorithm
let mgcdRecurs = (num1, num2) => {
    if(num1===0){
        return num2
    }else if(num2===0){
        return num1
    }else{
        let max = Math.max(num1, num2)
        let min = Math.min(num1, num2)
        let rem = max % min
        return mgcdRecurs(min, rem)
    }
}
console.log(mgcdRecurs(30,12),6)
console.log(mgcdRecurs(8,9),1)
console.log(mgcdRecurs(1,1),1)
console.log(mgcdRecurs(60,12),12)
console.log(mgcdRecurs(10927782,6902514), 846)
console.log(mgcdRecurs(1590771464,1590771620),4)

    //Day 36
//Waiting Lines
// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.
// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.
// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

class Queue {
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    
    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }

    enqueue(element){
        if(element.length === 0){
            return "there's nothing to store"
        }else{
            this.storage[this.tail] = element
            this.tail++
        }
    }

    size(){
        return this.tail - this.head
    }
}

let queue = new Queue
queue.enqueue('velociraptor')
queue.enqueue('trex')
queue.enqueue('triceratops')
queue.dequeue()

class Stack{
    constructor(){
        this.storage = {}
        this.size = 0
    }

    push(element){
        this.size++
        this.storage[this.size] = element
    }

    pop(){
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }

    peek(){
        return this.storage[this.size]
    }
}

let stack = new Stack
stack.push('lord of the rings')
stack.push('jurassic park')
stack.push('fountainhead')

//codewars version
var Queue = function() {
    // implement your Queue constructor here
        this.storage={}
        this.head=0
        this.tail=0
  };
  
  Queue.prototype.enqueue = function(item) {
    this.storage[this.tail] = item
    this.tail++
  };
  
  Queue.prototype.dequeue = function() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  };
  
  Queue.prototype.size = function() {
    return this.tail - this.head < 0 ? 0 : this.tail-this.head
  };