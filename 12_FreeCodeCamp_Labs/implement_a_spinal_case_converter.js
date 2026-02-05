function spinalCase(arg) {

  let regexSpacing = /([a-z])([A-Z])/g

  let regexReplacing = arg.replace(regexSpacing, "$1 $2")

  let regex = /([a-z]+)[\s_-]([A-Za-z]+)[\s_-](\w+)[\s_-](\w+)/i
  let replaceArg = regexReplacing.replace(regex, '$1-$2-$3-$4')

  return replaceArg.toLowerCase()

}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("ThisIsSpinalTap"))
console.log(spinalCase("Teletubbies say Eh-oh"))