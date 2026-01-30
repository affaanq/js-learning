function mutation(arr1) {
  const firstString = arr1[0].toLowerCase()
  const secondString = arr1[1].toLowerCase()

  for (let char of secondString) {

    if (!firstString.includes(char)) {

      return false
    }
  }
  return true

}


console.log(mutation(["hello", "hey"]))
