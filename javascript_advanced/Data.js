// 데이터 타입 확인

const a = 1 // Number
const b = '1' // String

console.log(typeof a)
console.log(typeof b)
console.log(typeof 'Hello' === 'string')
console.log(typeof 1 === 'number')
console.log(typeof true === 'boolean')
console.log(typeof false === 'boolean')
console.log(typeof null === 'object') // object
console.log(typeof undefined === 'undefined')
console.log(typeof NaN === 'number')
console.log(typeof Infinity === 'number')
console.log(typeof [] === 'object') // object
console.log(typeof {} === 'object') // object
console.log(typeof function() {} === 'function')
console.log(typeof new Date() === 'object')

console.log([].constructor === Array)
console.log({}.constructor === Object)
console.log(function() {}.constructor === Function)
console.log(new Date().constructor === Date)

// console.log(null.constructor);
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')


// 타입 확인 함수
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
  console.log(checkType(null))
  console.log(checkType(123))
  console.log(checkType(true))
  console.log(checkType(false))
  console.log(checkType(undefined))
  console.log(checkType([]))
  console.log(checkType({}))