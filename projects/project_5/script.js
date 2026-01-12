/**
 * Function: maskEmail
 * Logic: Isolates the username, preserves the first and last characters,
 * and masks the interior based on the username's length.
 */
function maskEmail(email) {
  // 1. Find the index of the "@" symbol to separate username from domain
  const atIndex = email.indexOf("@");
  
  // 2. Extract the username and the domain using slice
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  // 3. Define the components of the masked username
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  
  // 4. Calculate how many asterisks are needed (Total length minus the 2 characters we keep)
  const mask = "*".repeat(username.length - 2);

  // 5. Combine and return the final string
  return firstChar + mask + lastChar + domain;
}
