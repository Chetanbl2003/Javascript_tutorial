const balance = new Number(100)
console.log(balance) // [Number: 100]

console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)) // 100.00

const otherNumber = 123.974

console.log(otherNumber.toPrecision(3)) // 124

const hundreds = 100000000000

console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,00,000 which converts to the Indian Rupees value
