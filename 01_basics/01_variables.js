const accountId = 123456;
let accountEmail = "dshantanu63@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi"; // work but not recommended, use let or const

let accountState; // undefined

/*
Prefer not to use var, use let instead
because of issue of block scope and function scope
var is function scoped and let is block scoped
*/

//accountId = 456789; // not allowed because we cannot change the value of a constant variable


accountEmail = "huhudhuh@gmail.com";
accountPassword = "67890";


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);