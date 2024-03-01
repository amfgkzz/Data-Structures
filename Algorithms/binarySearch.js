const sortedArray = [1,2,3,4,5,6,7,8,9,10,11]

function binarySearch(array, target){
  let start = 0
  let end =  array.length - 1

  while (start <= end) {
    console.log("index start: ", start)
    console.log("index end: ", end)
    let middle = Math.floor((start + end) / 2)
    console.log("index middle: ", middle)
    console.log("middle value: ", array[middle])
    if (array[middle] < target){
      start = middle + 1
    }  
    else if (array[middle] > target){
      end = middle - 1
    }
    else return middle
  }

  return -1
}

binarySearch(sortedArray, 2)