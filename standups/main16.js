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

//linkedlists
//copying this here to have an easier accessible copy
//LINKEDLISTS AND EXTENDED CLASSES
class LinkedListS{
    constructor(){
        this.head = this.tail = null
        this.length = 0
    }
    //push to end
    append(value){
        //list empty
        if(!this.tail){
            this.head = this.tail = new Node(value)
        }else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
        }
        this.length++
    }
    //unshift to beginning
    prepend(value){
        //list empty
        if(!this.head){
            this.head = this.tail = new Node(value)
        }else{
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
        }
        this.length++
    }
    //shift from beginning
    removeHead(){
        //if empty list
        if(!this.head){
            return null
        }else{
            let removed = this.head
            //if last item
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.head = this.head.next
            }
            this.length--
            return removed.value
        }
    }
    //pop from end
    removeTail(){
        //if empty list
        if(!this.tail){
            return null
        }else{
            let removed = this.tail
            //if last item
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                let currentNode = this.head
                let newTail = currentNode
                while (currentNode.next){
                    newTail = currentNode
                    currentNode = currentNode.next
                }
                this.tail = newTail
                this.tail.next =  null
            }
            this.length--
            return removed.value
        }
    }
    search(value){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.value === value){
                return currentNode
            }else{
                currentNode = currentNode.next
            }
        }
        return null
    }
    size(){
        return this.length
    }
    indexOf(value){
        let index = 0
        let currentNode = this.head
        while(currentNode){
            if(currentNode.value === value){
                return index
            }else{
                index++
                currentNode = currentNode.next
            }
        }
        return -1
    }
}
class Node{
    constructor(value, next){
        this.value = value
        this.next = next || null
    }
}
class NodeDL extends Node{
    constructor(value, next, prev){
        super(value,next)
        this.prev = prev || null
    }
}
class LinkedListD extends LinkedListS{
    constructor(head, tail, length){
        super(head, tail, length)
    }
    append(value){
        //if no list
        if(!this.tail){
            this.head = this.tail = new NodeDL(value)
        }else{
            let prevTail = this.tail
            this.tail = new NodeDL(value)
            this.tail.prev = prevTail
            prevTail.next = this.tail
        }
        this.length++
    }
    prepend(value){
        //if no list
        if(!this.head){
            this.head = this.tail = new NodeDL(value)
        }else{
            let prevHead = this.head
            this.head = new NodeDL(value)
            this.head.next = prevHead
            prevHead.prev = this.head
        }
        this.length++
    }
    removeHead(){
        //empty list
        if(!this.head){
            return null
        }else{
            let removed = this.head
            //if last node
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            this.length--
            return removed.value
        }
    }
    removeTail(){
        //empty list
        if(!this.tail){
            return null
        }else{
            let removed = this.tail
            //if last node
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.tail = this.tail.prev
                this.tail.next = null
            }
            this.length--
            return removed.value
        }
    }
}
class LinkedListC extends LinkedListD{
    constructor(head, tail, length){
        super(head,tail,length)
    }
    append(value){
        //if empty
        if(!this.tail){
            this.head = this.tail = new NodeDL(value)
        }else{
            let oldTail = this.tail
            this.tail = new NodeDL(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
            this.tail.next = this.head
        }
        this.length++
    }
    prepend(value){
        //if empty
        if(!this.head){
            this.head = this.tail = new NodeDL(value)
        }else{
            let oldHead = this.head
            this.head = new NodeDL(value)
            this.head.next = oldHead
            this.head.prev = this.tail
            oldHead.prev = this.head
        }
        this.length++
    }
    removeHead(){
        //if empty list
        if(!this.head){
            return null
        }else{
            let removed = this.head
            //if last node
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = this.tail
            }
            this.length--
            return removed.value
        }
    }
    removeTail(){
        //if empty list
        if(!this.tail){
            return null
        }else{
            let removed = this.tail
            //if last node
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{
                this.tail = this.tail.prev
                this.tail.next = this.head
            }
            this.length--
            return removed.value
        }
    }
    search(value){
        let currentNode = this.head
        do{
            //console.log('search',value, this.tail, currentNode, currentNode.next)
            if(currentNode.value === value){
                return currentNode
            }else{
                currentNode = currentNode.next
            }
        }while(currentNode !== this.tail)
        return null
    }
    indexOf(value){
        let currentNode = this.head
        for(let i=0 ; i < this.length ; i++){
            //console.log('index of', value, this.tail, currentNode.value, currentNode.next)
            if(currentNode.value === value){
                return i
            }else{
                currentNode = currentNode.next
            }
        }
        return -1
    }
}
let listS = new LinkedListS
let listD = new LinkedListD
let listC = new LinkedListC
listS.append(1)
listS.append(2)
listS.append(3)
listS.prepend(0)
listS.prepend(-1)
console.log(listS.indexOf(3))
console.log(listS.search(1))
console.log(listS.removeHead())
console.log(listS.removeTail())
console.log(listS)
listD.append('a')
listD.append('b')
listD.append('c')
listD.prepend('z')
listD.prepend('y')
console.log(listD.indexOf('c'))
console.log(listD.search('a'))
console.log(listD.removeHead())
console.log(listD.removeTail())
console.log(listD)
listC.append('1a')
listC.append('2b')
listC.append('3c')
listC.prepend('0z')
listC.prepend('-1y')
console.log(listC)
console.log(listC.indexOf('3c'))
console.log(listC.search('1a'))
console.log(listC.indexOf('c'))
console.log(listC.search('a'))
console.log(listC.removeHead())
console.log(listC.removeTail())
console.log(listC)