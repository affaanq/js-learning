function fearNotLetter (arg) {

  let alphabets = "abcdefghijklmnopqrstuvwxyz"

  let slicingTheString = alphabets.slice(alphabets.indexOf(arg[0]), alphabets.length)

  for (let i = 0; i <= arg.length; i++) {

    if (arg[i] !== slicingTheString[i]) {

      return `You are missing the letter: ${slicingTheString[i]}`

  } 

}

}

console.log(fearNotLetter("stvwx"))