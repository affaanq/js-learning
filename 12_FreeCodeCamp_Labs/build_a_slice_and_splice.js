function frankenSplice (array1, array2, index){
  // 1. Shallow Copy: array2.slice() or [...array2] creates a copy 
  // so we don't mutate (change) the original input array.
  let array3 = array2.slice();

  // 2. Splice Parameters: 
  // - index: where to start
  // - 0: how many to delete (0 means we are just inserting)
  // - ...array1: the Spread Operator unpacks the array into individual elements
  array3.splice(index, 0, ...array1);

  // 3. Return Value: splice() returns deleted items, 
  // so we must return the new array (array3) instead.
  return array3;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]