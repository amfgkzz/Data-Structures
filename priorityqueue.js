// Priority queue data structure
// A priority queue is a FIFO data structure where the first element added is the first element removed ie first in, first out, with a priority associated with each element

const priorityQueue = []

priorityQueue.push(4, 2, 3, 1)
console.log(priorityQueue)

priorityQueue.sort()
console.log(priorityQueue)

module.exports = { priorityQueue }