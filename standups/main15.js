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
        this.size++
        this.stack[this.size] = value
    }
    pop(){
        if(this.size === 0) return 'nothing to remove'
        let removed = this.stack[this.size]
        delete this.stack[this.size]
        this.size--
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

    //Day 38
//Linked lists!
//can have singly and doubly linked lists, also circular type! (where first and last refer to each other)
//array vs linked list: array in memory is all in order in a continuous chunk of memory, linked list in mem can be anywhere but their connected to each other
//doubly linkedlist
class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    //add to end
    append(value){
        //if list empty
        if(!this.tail){
            this.head = this.tail = new Node(value)
        }else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }
    //add to beginning
    prepend(value){
        //if list empty
        if(!this.head){
            this.head = this.tail = new Node(value)
        }else{
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }
    deleteHead(){
        //if list empty
        if(!this.head){
            return null
        }else{
            let removedHead = this.head
            //if 1 node left
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }
    deleteTail(){
        //if list empty
        if(!this.tail){
            return null
        }else{
            let removedTail = this.tail
            //if 1 node left
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.value
        }

    }
    search(value){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.value === value){
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
}

class Node {
    constructor(value, prev, next){
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}