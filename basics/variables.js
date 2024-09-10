const accountId = 12345
let accountEmail = "hi@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" //allows declaration without datatype
let accountState; // undefined as output
//accountId = 2 // not allowed to change in const 

accountEmail = "hc@gmail.com"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
// prefer not to use var because of issue in block scope and functional scope