const sortedArray = []

for(let i = 0; i <= 1000; i++){
  sortedArray.push(i)
}

function binarySearch(array, target){
  let start = 0
  let end = array.length - 1

  while (start <= end){
    let middle = Math.floor((start + end) / 2)
    if (array[middle] < target){
      start = middle + 1
    } else if (array[middle] > target){
      end = middle - 1
    } else {
      console.log(`${target} found at index ${middle}`)
      return middle
    }
  }
  console.log(`${target} not found`)
  return -1
}

binarySearch(sortedArray, 26)
binarySearch(sortedArray, 17)
binarySearch(sortedArray, 1)
binarySearch(sortedArray, 4)
binarySearch(sortedArray, 13)
binarySearch(sortedArray, 22)
binarySearch(sortedArray, 0)

console.log()
console.log()

function binarySearchAlternative(array, target){
  let start = 0
  let end =  array.length - 1

  while (start != end) {
    let middle = Math.ceil((start + end) / 2)
    if (array[middle] > target){
      end = middle - 1
    }  
    else {
      start = middle
    }
  }
  if (array[start] == target) {
    console.log(`${target} found at index ${start}`)
    return start
  }
  console.log(`${target} not found`)
  return -1
}

binarySearchAlternative(sortedArray, 26)
binarySearchAlternative(sortedArray, 17)
binarySearchAlternative(sortedArray, 1)
binarySearchAlternative(sortedArray, 4)
binarySearchAlternative(sortedArray, 13)
binarySearchAlternative(sortedArray, 22)
binarySearchAlternative(sortedArray, 0)

console.log()
console.log()

function binarySearchRecursion(array, target, start, end){
  let middle = Math.floor((start + end) / 2)

  if(start > end){
    console.log(`${target} not found`)
    return -1
  }

  if(array[middle] < target){
    return binarySearchRecursion(array, target, middle+1, end)
  } else if(array[middle] > target){
    return binarySearchRecursion(array, target, start, middle-1)
  }

  if(array[middle] == target){
    console.log(`${target} found at index ${middle}`)
    return middle
  } else {
    console.log(`${target} not found`)
    return -1
  }
}

// const sortedArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

binarySearchRecursion(sortedArray, 1000, 0, (sortedArray.length - 1))
// binarySearchRecursion(sortedArray, 2, 0, (sortedArray.length - 1))
// binarySearchRecursion(sortedArray, 25, 0, (sortedArray.length - 1))