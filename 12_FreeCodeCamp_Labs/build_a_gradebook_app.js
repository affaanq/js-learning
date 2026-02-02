function getAverage (arr1) {

  let scoresStore = 0

  for (let nums of arr1) {

    scoresStore += nums
  }

  let calculate = scoresStore / arr1.length

  return calculate
}

console.log(getGrade(90))

function getGrade(score1) {

  if (score1 === 100) {

    return `A+`

  } else if (score1 <= 99 && score1 >= 90) {

    return `A`
  } else if (score1 <= 89 && score1 >= 80) {

    return `B`
  } else if (score1 <= 79 && score1 >= 70) {

    return `C`
  } else if (score1 <= 69 && score1 >= 60) {

    return `D`
  } else if (score1 <= 59 && score1 >= 0) {

    return `F`
  }
}

function hasPassingGrade(score1) {

  if (getGrade(score1) === "F") {

    return false
  } else {

    return true
  }


}

function studentMsg (arr2, score2) {

  if (score2 >= 60) {
    let msg = `Class average: ${getAverage(arr2)}. Your grade: ${getGrade(score2)}. You passed the course.`

    return msg
  } else {

        let msg2 = `Class average: ${getAverage(arr2)}. Your grade: ${getGrade(score2)}. You failed the course.`

    return msg2
  }

}