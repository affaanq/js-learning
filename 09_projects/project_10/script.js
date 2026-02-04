const regexPattern = document.querySelector("#pattern")
const stringToTest = document.querySelector("#test-string")
const testButton = document.querySelector("#test-btn")
const testResult = document.querySelector("#result")
let caseInsensitiveFlag = document.querySelector("#i")
let globalFlag = document.querySelector("#g")

function getFlags() {

  if (!caseInsensitiveFlag.checked && !globalFlag.checked) {

    return ``
  } else if (caseInsensitiveFlag.checked && !globalFlag.checked) {

  return `i`

} else if (!caseInsensitiveFlag.checked && globalFlag.checked) {

  return `g`

} else {

  return `ig`
}

}

testButton.addEventListener("click", () => {

    let pattern = regexPattern.value;
    let flags = getFlags();
    let reg = new RegExp(pattern, flags);
    let giveResult = stringToTest.textContent.match(reg)

    if (giveResult === null) {
    let nullCondition = testResult.innerHTML = `no match`
    return nullCondition
  }
  else {

    let highlights = stringToTest.textContent.replace(reg, (match) => `<span class="highlight">${match}</span>`)
    let joingArray = giveResult.join(", ")
    testResult.innerHTML = `${joingArray}`;
    stringToTest.innerHTML = highlights;
  }

  })