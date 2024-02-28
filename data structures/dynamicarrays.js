let dynamicArray = [];

function addToDynamicArray(element) {
    dynamicArray.push(element);
}

function removeFromDynamicArray(index) {
    dynamicArray.splice(index, 1);
}

function getDynamicArraySize() {
    return dynamicArray.length;
}