function chunkArrayInGroups(arr, size) {
  let result = [];
  
  // We start at 0 and jump forward by 'size' each time
  for (let i = 0; i < arr.length; i += size) {
    // slice(start, end) takes a portion without changing the original array
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));