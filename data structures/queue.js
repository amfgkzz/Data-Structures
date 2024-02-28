// Queue data structure
// Queue is a FIFO data structure where the first element added is the first element removed ie first in, first out

const queue = []
queue.push('fourth item', 'third item', 'second item', 'first item')
// console.log(queue) // should show ['fourth item', 'third item', 'second item', 'first item']
queue.shift() // will remove first item of the queue
// console.log(queue) // should show show ['fourth item', 'third item', 'second item']

module.exports = { queue }