const array = []

array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array)

// linearSearch traverses through the array in sequential order, from the the first element to the last, looking for the value. It returns the index of the value if found, or false / -1 if not found.
function linearSearch(array, target) { 
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i // will return the index position of the target if found
        }
    }
  return -1  // it is returning -1 if the target is not found, can change to false if needed
}

console.log(linearSearch(array, 5)) // should show 4
console.log(linearSearch(array, 11)) // should show -1