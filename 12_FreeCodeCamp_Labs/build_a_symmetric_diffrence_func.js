function diffArray (arg1, arg2) {


  let filterArray1 = arg1.filter((nums) => !arg2.includes(nums) )

  let filterArray2 = arg2.filter((nums) => !arg1.includes(nums) )

  let concatination = filterArray1.concat(filterArray2)

  return concatination
  }

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))

/*
Passed:6. diffArray(["pen", "book"], ["book", "pencil", "notebook"]) should return ["pen", "pencil", "notebook"].
Passed:7. diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]) should return ["car", "train", "plane"].
Passed:8. diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]) should return ["banana", "grape"].
Passed:9. diffArray([], ["apple", "banana"]) should return ["apple", "banana"].
Passed:10. diffArray(["apple", "banana"], []) should return ["apple", "banana"].
Passed:11. diffArray([], []) should return [].
*/