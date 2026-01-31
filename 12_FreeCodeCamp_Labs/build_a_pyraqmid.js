function pyramid(str1, num, bool) {
  // We start with a newline character as required by the test expectations
  let finalStore = "\n";

  if (bool === false) {
    // Normal Pyramid: Row 1 to Row 'num'
    for (let i = 1; i <= num; i++) {
      // ERROR FIX: To get odd numbers (1, 3, 5, 7), we use (2 * i - 1)
      // We also only need leading spaces to push the characters to the center
      let spaces = " ".repeat(num - i);
      let characters = str1.repeat(2 * i - 1);
      
      finalStore += spaces + characters + "\n";
    }
  } else {
    // Inverted Pyramid: Start from 'num' and count down to 1
    for (let i = num; i >= 1; i--) {
      let spaces = " ".repeat(num - i);
      let characters = str1.repeat(2 * i - 1);
      
      finalStore += spaces + characters + "\n";
    }
  }

  return finalStore;
}

console.log(pyramid("o", 4, false));