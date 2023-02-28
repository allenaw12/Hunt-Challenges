    //Day 39
//Given the head of a linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.

function findMiddleNode(head){
    //brute force count and loop again, but WORKS!
    // let count = 0
    // let node = head
    // if(!node.next)return node
    // if(!node.next.next)return node.next
    // while(node.next){
    //     count++
    //     node = node.next
    // }
    // let half = Math.ceil(count/2)
    // for(i=0;i<=half;i++){
    //     if(i===0){
    //         node=head
    //     }else{
    //         node=node.next
    //     }
    // }
    // return node

    //more effienct
    // let node = head
    // let twice = node.next
    // if(!twice)return node
    // if(!twice.next)return twice
    // while(twice && twice.next){
    //     console.log(node.value, twice)
    //     node = node.next
    //     twice = twice.next.next
    //     console.log(node.value, twice)
    //     if(twice && !twice.next){
    //         node = node.next
    //     }
    // }
    // return node

    //found on leetcode
    let node = head
    let twice = head
    while(twice && twice.next){
        console.log(node.value, twice)
        node = node.next
        twice = twice.next.next
        console.log(node.value, twice)
    }
    return node
}
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
let list = new LinkedListS
list.append(1)
let listSeven = new LinkedListS
listSeven.append(3)
listSeven.append(4)
listSeven.append(5)
listSeven.append(6)
listSeven.prepend(2)
listSeven.prepend(1)
let listSodd = new LinkedListS
listSodd.append(3)
listSodd.append(4)
listSodd.append(5)
listSodd.prepend(2)
listSodd.prepend(1)
let listStwo = new LinkedListS
listStwo.append(1)
listStwo.append(2)
let listSthree = new LinkedListS
listSthree.append(1)
listSthree.append(2)
listSthree.append(3)
let listSfour = new LinkedListS
listSfour.append(1)
listSfour.append(2)
listSfour.append(3)
listSfour.append(4)

console.log(findMiddleNode(list.head),'length:1, val is 1')
console.log(findMiddleNode(listStwo.head),'length:2, val is 2')
console.log(findMiddleNode(listSthree.head),'length:3, val is 2')
console.log(findMiddleNode(listSfour.head),'length:4, val is 3')
console.log(findMiddleNode(listSodd.head),'length:5, val is 3')
console.log(findMiddleNode(listSeven.head),'length:6, val is 4')
listSeven.append(7)
console.log(findMiddleNode(listSeven.head),'length:7, val is 4')
listSeven.append(8)
console.log(findMiddleNode(listSeven.head),'length:8, val is 5')