// 함수
function hello(){
  console.log('Hello!')
}

console.log(hello())

//
function getNumber() {
  return 123
}

console.log(getNumber()) // 123
console.log(getNumber) // 함수전체

const getNumber2 = function() {
  return 321
}
console.log(getNumber2()) // 321

//
const a = function() {
  console.log('A')
}
const b = function(c) {
  console.log(c);
}
b(123)
b(a)