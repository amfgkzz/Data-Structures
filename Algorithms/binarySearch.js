const sortedArray = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(array, size, target){
  const start = array[0]
  const middle = array[Math.floor(size / 2)]
  const end = array[size - 1]

  console.log(size)
  console.log(middle)
}

binarySearch(sortedArray, sortedArray.length, 9)