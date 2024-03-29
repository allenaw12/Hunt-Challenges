    //Day 43
//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order

//Binary Search
//function binSearch(arr,target){
    //try 1
    // let midInd = Math.floor(arr.length/2)-1
    // if(arr.length === 1 && target !== arr[0])return -1
    // if(target === arr[midInd]){
    //     return midInd
    // }else if(target > arr[midInd]){
    //     binSearch(arr.slice(midInd),target)
    // }else if(target < arr[midInd]){
    //     binSearch(arr.slice(0,midInd+1), target)
    // }
    //try 2
    // let current = arr
    // while(current.length>1){
    //     let mid = Math.floor(current.length/2)
    //     if(target === current[mid]){
    //         return mid
    //     }else if(target > current[mid]){
    //         current = current.slice(mid)
    //     }else if(target < current[mid]){
    //         current = current.slice(0,mid)
    //     }
    // }
    // return -1
    //try 3
    //after looking at leon's solution
    //beginning and end of input array indices
//     let left = 0, right=arr.length-1
//     //loop and slice in half to locate target value, changing left and right values to dial down, if they equal or left becomes greater than right, loop stops
//     while(left<right){
//         // let mid = left + Math.floor((right-left+1)/2)
//         let mid = Math.floor((right+1)/2)
//         if(target < arr[mid]){
//             right = mid-1
//         }else{
//             left = mid
//         }
//     }
//     return target === arr[left] ? left : -1
// }
//leon's solution
function binarySearch(nums,target){
    let left = 0,right=nums.length-1
    while(left<right){
        let mid = left + Math.floor((right-left+1)/2)
        if(target < nums[mid]){
            right = mid-1
        }else{
            left = mid
        }
    }
    return nums[left] === target ? left : -1
}
// console.log(binSearch([-1,0,3,5,9,12],2), '-1')
// console.log(binSearch([-1,0,3,5,9,12],9), '4')

function dfsInOrder(arr, target){
        let result = arr
        let traverse = node => {
            if(node.left)traverse(node.left)
            result.push(node.value)
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return result
    }

//binary tree
class Node{
    constructor(value){
        this.value = value
        this.left=this.right=null
    }
}

class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }
    min(){
        let currentNode = this.root
        while(currentNode.left){
            currentNode = currentNode.left
        }
        return currentNode.value
    }
    max(){
        let currentNode = this.root
        while(currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode.value
    }
    insert(value){
        this.count++
        let newNode = new Node(value)
        let searchTree = node => {
            if(value < node.value){
                if(!node.left){
                    node.left = newNode
                }else{
                    searchTree(node.left)
                }
            }else if(value > node.value){
                if(!node.right){
                    node.right = newNode
                }else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }
    size(){
        return this.count
    }
    contains(value){
        let currentNode = this.root
        while(currentNode){
            if(value===currentNode.value){
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
    //searchs => 3dfs, 1 bfs
    //root left right
    dfsPreOrder(){
        let result = []
        let traverse = node => {
            result.push(node.value)
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return result
    }
    //left right root
    dfsPostOrder(){
        let result = []
        let traverse = node => {
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        return result
    }
    //left root right
    dfsInOrder(){
        let result = []
        let traverse = node => {
            if(node.left)traverse(node.left)
            result.push(node.value)
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return result
    }
    //level by level
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

    //Day 44
//Binary Search
function binSearch(arr, target){
    //starting and ending indices
    let left = 0, right=arr.length-1
    //want to split in half(find mid value) and check if target is larger or smaller than that
    //while right is greater than left
    while(right>left){
        //mid is finding difference of smallest and biggest indices and dividing by 2, and rounding up
        let mid = Math.ceil((left+right)/2)
        //console.log(right, left, mid)
        //if target equals mid index value, just return that
        if(target === arr[mid]){
            //console.log('target equal to mid value!')
            return mid
        //else if target is less than middle value...set right(high index) to mid-1 (since you don't need mid value in your new array)
        }else if(target < arr[mid]){
            right = mid-1
        //last else, if target is greater than mid value....set left(low index) to mid+1 (since you don't need mid value in new array)
        }else{
            left = mid+1
        }
    }
    return target === arr[left] ? left : -1
}
console.log(binSearch([-1,0,3,5,9,12],2), '-1')
console.log(binSearch([-1,0,3,5,9,12],9), '4')
console.log(binSearch([-1,0,2,3,5,9,12],3), '3')
console.log(binSearch([-1,0,2,3,5,9,12],0), '1')
console.log(binSearch([-1,0,2,3,5,9,12],8), '-1')