let score = 33;

console.log(typeof score); // show number
console.log(typeof (score));  // same show number









let score1 = "33"

console.log(typeof score1); // show string

let valueInNumber = Number(score1); //it convert the string into number
console.log(typeof valueInNumber); // now show number
console.log(valueInNumber); // shows 33








let score2 = "abc234"

console.log(typeof score2);

let valInNumber = Number(score2); 
console.log(typeof valInNumber);

console.log(valInNumber); // shows NAN(not a number) beacise in score2 rhere is not a number            








let score3 = null;

console.log(typeof null);  // shows obbject 
console.log(score3); // shows null

let valInNumber1 = Number(score3); // convert null into number
console.log(typeof valInNumber1); // shows number
console.log(valInNumber1); // shows zero








let score4 = undefined;

console.log(typeof score4);
console.log(score4);

let valInnNumber = Number(score4);
console.log(typeof valInnNumber);
console.log(valInnNumber);





let score5 = true;

console.log(typeof score5);
console.log(score5);

let valInnnNumber = Number(score5);
console.log(typeof valInnnNumber);
console.log(valInnnNumber);



// short summary
// "33" => 33
// "33abc" => NaN
// "true" => 1; false => 0




let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false
// "shantanu" => true; 2 or any other number => true;




let someNumber = 33;
console.log(typeof someNumber); // number


let stringNumber = String(someNumber)
console.log(stringNumber); // it show 33  
console.log(typeof stringNumber);  // shows 33 is a string

// Thats all about conversion of databases







