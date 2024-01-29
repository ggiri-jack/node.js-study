// 부정연산자

console.log(!true) // f
console.log(!false) // t

console.log(!0) // t
console.log(!!0) // f
console.log(!!!0) // t
console.log(!null) // t
console.log(!undefined) // t
console.log(!NaN) // t
console.log(!'') // t

console.log(![]) // f
console.log(!{}) // f

// 비교연산자
const a = 1
const b = 3

console.log(a == b) // f
console.log(a === b) // f
console.log(a > b) // f
console.log(a >= b) // f
console.log(a < b) // t
console.log(a <= b) // t
console.log(a!== b) // t
console.log(a!= b) // t
