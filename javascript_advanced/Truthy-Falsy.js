// 참과 거짓
if (true) {
  console.log('참!')
}
if (false) {
  console.log('거짓!')
}
if (1) {
  console.log('참!')
}
if (0) {
  console.log('거짓!')
}
if ('') {
  console.log('거짓!')
}
if ('0') {
  console.log('참!')
}
if (null) {
  console.log('거짓!')
}
if (undefined) {
  console.log('거짓!')
}
if (NaN) {
  console.log('거짓!')
}
if (Infinity) {
  console.log('참!')
}

// 예시
const fruits = ['apple', 'banana', 'cherry']
if (fruits) {
  console.log('아이템이 들어있음!'); 
}
const Fruits = []
if (Fruits.length) {
  console.log('아이템이 들어있음!'); 
}