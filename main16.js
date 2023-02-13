    //Day 39
//nodes of data that point to each other
//singly linked list     1-> 2-> 3->    holds a pointer, and the value
//train schedules, linked list (stop to stop to stop)
//airline reservation probs
//music player

//stack array way
let stackArr = []
    //add to stack
stackArr.push(1)
stackArr.push(2)
stackArr.push(3)
    //delete form stack
stackArr.pop()
    //peek at next value
stackArr[stackArr.length-1]

//queue array way
let queueArr = []
    //add to queue
queueArr.push('a')
queueArr.push('b')
queueArr.push('c')
    //delete from queue
queueArr.shift()
    //size
queueArr.length

//stack class object
class Stack {
    constructor(){
        this.storage = {}
        this.size = 0
    }
    push(value){
        this.size++
        this.storage[this.size] = value
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

//queue class object
class Queue{
    constructor(){
        let storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(value){
        this.storage[this.tail] = value
        this.tail++
    }
    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
    size(){
        return this.tail - this.head
    }
}