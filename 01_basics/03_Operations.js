// *************************** Operations ***************************

let value = 3;
let negValue = -value;
console.log(negValue); // shows -3

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2); // modulo(remainder)

let str1 = "Hello ";
let str2 = "Shantanu Dwivdi";

let str3 = str1 + str2;
console.log(str3);     







console.log("1" + 2);  // we get 12 
console.log(1 + "2");  // we get 12
console.log("1" + 2 + 2);  // we get 122
console.log(1 + 2 + "2");  // we get 32 

console.log( (3 + 4) * 5 % 3);

// now how it's work? we have to read the acma script guidlines (abstract operations -> type components -> ToPrimitive)
// Although it's not good way to wrtie the code we have to writee the code clean and siple which is easy to understandable 


console.log(+true); // we get 1
console.log(+""); // we get 0

let num1, num2, num3

num1 = num2 = num3 = 2+2 // not good practice to write this type code (practice wise it's good or exam point of view it's good)



// Increament Operator 
// prefix and postfix operator you have to read this concept on mdn

let x = 3;
const y = x++; // postfix operator 1st return then increase 

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // prefix operator 1st increase then return 

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"






