let score = "123";  // Declaring a variable 'score' and assigning it a string value "123"
let temperature = null;  // Declaring a variable 'temperature' and assigning it a null value
let mixture = "123@asd4";  // Declaring a variable 'mixture' and assigning a string value containing numbers and letters

// For "score"
console.log(typeof score); // Prints the type of 'score', which is 'string'

let valueInNumber = Number(score); // Converts 'score' to a number and stores it in 'valueInNumber'
console.log(typeof valueInNumber); // Prints the type of 'valueInNumber', which is 'number'
console.log(valueInNumber); // Prints the converted value, which is 123 (since "123" is a valid number)

// For "temperature"
console.log(typeof temperature); // Prints the type of 'temperature', which is 'object' (special case in JavaScript)

let valueNumber = Number(temperature); // Converts 'temperature' (null) to a number
console.log(typeof valueNumber); // Prints the type of 'valueNumber', which is 'number'
console.log(valueNumber); // Prints the converted value, which is 0 (null converts to 0 in JavaScript)

// For "mixture"
console.log(typeof mixture); // Prints the type of 'mixture', which is 'string'

let valuesNumber = Number(mixture); // Converts 'mixture' to a number, but it contains non-numeric characters
console.log(typeof valuesNumber); // Prints the type of 'valuesNumber', which is 'number'
console.log(valuesNumber); // Prints NaN (Not-a-Number), as "123@asd4" cannot be converted to a valid number

// conversion into Number datatype and when used "typeOf" operator :
// "33" => 33
// "33abc" => NaN
// true => true; false => 0;
// undefined => Nan

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// conversion into Boolean datatype and when used "typeOf" operator
// 1 => true; 0 => false
// "chetan" => true; "" => false;

// **************************** Operations ********************************

let value = 4
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

let str1 = "Hello"
let str2 = " Chetan"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2 +2) //output : 122
console.log(1+2+"3") // output : 33

let num1, num2, num3

num1 = num2 = num3 = 2+2
console.log(num1, num2, num3)

// postfix increment :

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

// Prefix increment 

let a = 3;
const b = ++x;
// x is 4; y is 4

let a2 = 3n;
const b2 = ++x2;
// x2 is 4n; y2 is 4n

// link to study conversion type
// https://tc39.es/ecma262/multipage/abstract-operations.html