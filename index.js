// Stack data structure
// Stack is a data structure where the last element added is the first element removed ie first in, last out

// const stack = []

// stack.push('first item')
// console.log(stack) // should show ['first item']

// stack.pop()
// console.log(stack) // should show []

// stack.push('second item')
// stack.push('third item')
// stack.push('fourth item')
// console.log(stack) // should show ['second item', 'third item', 'fourth item']
// stack.pop() 
// console.log(stack) // should show ['second item', 'third item']

const { stack } = require('./data structures/stack.js')
const { queue } = require('./data structures/queue.js')
const { priorityQueue } = require('./data structures/priorityqueue.js')

console.log('stack: ', stack) // ['first item', 'second item', 'third item', 'fourth item']
// console.log('queue: ', queue) // ['first item', 'second item', 'third item', 'fourth item']
// stack.pop()
// queue.shift()
// console.log('stack: ', stack)
// console.log('queue: ', queue)
// console.log('priorityQueue: ', priorityQueue) // sorted from lowest to highest

const linkedList = []

// linkedList.push("A")
// linkedList.push("B")
// linkedList.push("C")
// linkedList.push("D")
// linkedList.push("E")

// console.log(linkedList) // ['A', 'B', 'C', 'D', 'E']

// linkedList.pop()
// console.log(linkedList) // ['A', 'B', 'C', 'D']

// linkedList.unshift(0)
// linkedList.unshift(1)
// console.log(linkedList) // [1, 0, 'A', 'B', 'C', 'D']
// linkedList.shift()
// linkedList.shift()
// console.log(linkedList) // ['A', 'B', 'C', 'D']