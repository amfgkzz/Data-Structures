// Stack data structure
// Stack is a FILO data structure where the last element added is the first element removed ie first in, last out

const stack = []

stack.push('first item')
// console.log(stack) // should show ['first item']

// stack.pop()
// console.log(stack) // should show []

stack.push('second item')
stack.push('third item')
stack.push('fourth item')
// console.log(stack) // should show ['second item', 'third item', 'fourth item']
stack.pop() // will remove last item of the stack
// console.log(stack) // should show ['second item', 'third item']

module.exports = { stack }