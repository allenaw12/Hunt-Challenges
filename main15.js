    //Day 37
//Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.
// An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out. 

// Waiting Lines
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
// As long as the tests pass, go for it!
//array way? LINEAR COMPLEXITY DUE TO ARRAY SHIFTING (thus changing index and 'property' of value displayed in array)
// function Queue(){
//     this.queue = []
//     this.enqueue = function(value){
//         this.queue.push(value)
//     }
//     this.dequeue = function(){
//         return this.queue.shift()
//     }
//     this.size = function(){
//         return this.queue.length
//     }
// }

//object way?
class Queue {
    constructor(){
        this.queue = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(value){
        this.queue[this.tail] = value
        this.tail ++
    }
    dequeue(){
        let removed = this.queue[this.head]
        if(removed === undefined) {
            this.head = 0
            this.tail = 0
            return 'queue empty, nothing to remove'}
        delete this.queue[this.head]
        this.head ++
        return removed
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

//object stack
class Stack{
    constructor(){
        this.stack = {}
        this.size = 0
    }
    push(value){
        this.stack[this.size] = value
        this.size++
        console.log(this.stack, this.size)
    }
    pop(){
        if(this.size === 0) return 'nothing to remove'
        this.size--
        let removed = this.stack[this.size]
        delete this.stack[this.size]
        console.log(this.stack, this.size, removed)
        return removed
    }
    peek(){
        return this.stack[this.size]
    }
}

let stack = new Stack
stack.push('lord of the rings')
stack.push('jurassic park')
stack.push('fountainhead')
stack.push('jumanji')
stack.pop()