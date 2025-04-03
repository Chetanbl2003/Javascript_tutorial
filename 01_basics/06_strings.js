const name = "Chetan"
const repoCount = 50

console.log(`Kon'nichiwa, watashi no namaeha ${name} and my repository count is ${repoCount}`)

const gameName = new String ("Chetan - B - L")
console.log(gameName)

console.log(gameName.length)
console.log(gameName.indexOf('t'))
console.log(gameName.charAt(2))

const newString = gameName.substring(0,4) // negative value does not going to work in this method of an object
console.log(newString)

const anotherString = gameName.slice(-6, 2) // negative values are also can be included in this method of an object
console.log(anotherString)

// For Reference
// Indexes:   0   1   2   3   4   5
//            C   h   e   t   a   n
// Negative: -6  -5  -4  -3  -2  -1


const newStringOne = "   Chetan  "
console.log(newStringOne.trim());

const url = "https://www.goo%20gle.com"
console.log(url.replace('%20',''))
console.log(url.includes('goo%20gle'))

console.log(gameName.split('-'))