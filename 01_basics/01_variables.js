const accountId = 15502
let accountEmail = "tyagiabhishek318@gmail.com"
var accountPassword = "12345"
accountCity = "Murthal"

let accountState;
/*
prefer not use var
because of issue in block scope and functional scope 

*/


//accountId = 14402     //not allowed


accountEmail = "Tyagi@007"
accountPassword = "4321"
accountcity = "Sonipat"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])