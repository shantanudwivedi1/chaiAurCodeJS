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
console.log()

