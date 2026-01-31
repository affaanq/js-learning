
function largestOfAll(arr1) {

  let finalArray = []

  for (let i = 0; i < arr1.length; i++) {

    let arrayExtract = arr1[i];

    let StoreVariable = -10; // thiss is the starting point from where the calculation begins... dont miss it out, it also stores the current highest
  
    for (let char of arrayExtract) {
     if (char > StoreVariable) {
       StoreVariable = char; // assign the current highest
     }
      
    }

    finalArray.push(StoreVariable)
    
  }
  return finalArray

}


console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))