    //Day 41
//high level for trees
//linked list => made up of nodes => each node has a value and pointer(next)

//NODE BASED STRUCTURES
//graphs=>nodes that can all be connected to each other
//eg: cities=>package from sf to atl taking different routes
    //cycles...

//trees=>heirarchal orginate and branch out (looks like upside down tree)
//og node is called 'root' node
//parent child relationships, parent child nodes, one to many relationship
//different kinds of trees
    //eg: heaps=> trees but keep values in order as they're added
    //eg: tries=> keeping words in order
    //eg: binary tree=> each node has max of 2 children/pointers
//linked list is like one dimensional tree
//binary trees help with => search algorithms, sorting algorithms, file systems

//DOM is a tree node structure! :O

    //Day 42
//trees => hierarchal parent:child, one:many (with binary tree, only 2 haha)
//binary tree rules => each node can have max 2 children, repped by .left and .right pointers
//tree nodes: top node is 'root'
            //: node with no children: leaf
            //: from root to leaf = branch
//traversal order for binary tree?
    //depends...
    //iterative(for loop), recursive(calling self)(branching recursion)
//binary search tree => 'balanced' give log n search operation, every node must be MORE than left child and LESS than right child, validating tree to check all left is less than root, and all right is more than root (children of 3 node left 1 right 5, 2 can't left child of 5, that's not valid cause it would be on right branch and less than root)

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }
    size(){
        return this.count
    }
    insert(value){
        this.count++
        let newNode = new Node(value)
        let searchTree = node => {
            if(value<node.value){
                if(!node.left){
                    node.left = newNode
                }else{
                    searchTree(node.left)
                }
            }else if(value>node.value){
                if(!node.right){
                    node.right = newNode
                }else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }
    min(){
        let currentNode = this.root
        while (currentNode.left){
            currentNode = currentNode.left
        }
        return currentNode.value
    }
    max(){
        let currentNode = this.root
        while (currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode.value
    }
    contains(value){
        let currentNode = this.root
        while(currentNode){
            if(value === currentNode.value){
                return true
            }
            if(value < currentNode.value){
                currentNode = currentNode.left
            }else if(value > currentNode.value){
                currentNode = currentNode.right
            }
        }
        return false
    }
    //depth first search => branch by branch
    //left root right
    dfsInOrder(){
        let result = []
        let traverse = node => {
            if(node.left)traverse(node.left)
            result.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }
    //root left right
    dfsPreOrder(){
        let result = []
        let traverse = node => {
            result.push(node.value)
            if(node.left)traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }
    //left right root
    dfsPostOrder(){
        let result = []
        let traverse = node => {
            if(node.left)traverse(node.left)
            if(node.right) traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        return result
    }
    //breadth first search => level by level
    bfs(){
        let result = []
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let currentNode = queue.shift()
            result.push(currentNode.value)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return result
    }
}

// Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:
// Input: root = [1,null,2]
// Output: 2
// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
//leon's example breadth first search => movie theater example(you ask the person in front of you how many rows are in front of them, since they can't see all the rows, they are asking the person in front of them the same question, til the first row answers 0(base case lol) then it collapses back)
let maxDepth = root => {
    //since recursion, base case if root is null
    if(!root)return 0
    //recursing part, each call will add 1 and largest one as collapse back will be returned
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}