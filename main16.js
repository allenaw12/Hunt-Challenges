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
        this.storage = {}
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
//linked list
class LinkedList{
    constructor(){
        this.head = this.tail = null
    }
    append(value){
        //if empty list
        if(!this.tail){
            this.head =this.tail=new Node(value)
        }else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }
    prepend(value){
        //if empty list
        if(!this.head){
            this.head = this.tail = new Node(value)
        }else{
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }

    }
    removeHead(){
        //if empty list
        if(!this.head){
            return null
        }else{
            let removed =  this.head
            //if last item
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev =  null
            }
            return removed.value
        }
    }
    removeTail(){
        if(!this.tail){
            return null
        }else{
            let removed =  this.tail
            //if last node
            if(this.head === this.tail){
                this.head =  this.tail = null
            }else{
                this.tail.prev =  this.tail
                this.tail.next = null
            }
            return removed.value
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
class Node{
    constructor(value, prev, next){
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}