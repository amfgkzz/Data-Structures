// Linkedlist data structure
// A linkedlist is a linear data structure where each node contains a value and a pointer to the next node

// LinkedList = stores Nodes in 2 parts (data + address)
// Nodes are in non-consecutive memory locations
// elements are linked using pointers
// Singly linked list = each node has a pointer to the next node
// Node                  Node                Node                Node
// [data | address] -> [data | address] -> [data | address] -> [data | address] -> null]

// advantages?
// 1. Dynamic Data Structure (allocates needed memory while running)
// 2. Fast insertion and deletion. O(1)
// 3. No/Low memory waste

// disadvantages?
// 1. Greater memory usage (additional pointer)
// 2. No random access of elements (no index [i])
// 3. Acessing/searching of elements is more time consuming. O(n)

// uses?
// 1. implement Stacks/Queues
// 2. GPS Navigation
// 3. music playlist
// 4. file system

const linkedList = []

linkedList.push("A")
linkedList.push("B")
linkedList.push("C")
linkedList.push("D")
linkedList.push("E")

console.log(linkedList) // ['A', 'B', 'C', 'D', 'E']

linkedList.pop()
console.log(linkedList) // ['A', 'B', 'C', 'D']

linkedList.unshift(0)
linkedList.unshift(1)
console.log(linkedList) // [1, 0, 'A', 'B', 'C', 'D']

linkedList.shift()
linkedList.shift()
console.log(linkedList) // ['A', 'B', 'C', 'D']

// creating a linked list in javascript, stuck on the add prototype function for the array, need to make it where the array length is increased and also able to add in the index, value needed for the add method