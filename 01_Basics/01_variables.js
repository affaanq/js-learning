const accountId = 144553 // const : cannot be changed
let accountEmail = "affaan@gmail.com" //
var accountPassword = "12345" // Two ways of declaring a variables, var n let
accountCity = "Glasgow"
let accountState;
// accountId = 2 // this is not allowed

//let does not cause the scope problem of {}

accountEmail = "hc@gmail.com"
accountPassword = "23545"
accountCity = "banglore"

console.log(accountId);

/*
Prefer not to use var 
cos of issue in block scope and functional scope..
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]) //it helps in printing the output more easily and prints it in a tabular form



