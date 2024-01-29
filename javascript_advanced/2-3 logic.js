// 논리연산자

//AND 연산자  (코드 왼쪽에서부터 확인을 해서 가장 먼저 만나는 거짓 데이터를 반환)
const a = true
const b = false
if (a&&b) {
  console.log('모두가 참!')
}

console.log(true && false) // f
console.log(1 && 0) // 0
console.log(3 && 0 && 12) // 0
console.log(3 && 12) // 12

// OR 연산자
if (a||b) {
  console.log('하나 이상이 참!')
}

console.log(true || false) // t
console.log(1 || 0) // 1
console.log(0 || 12 || 3) // 12
console.log(false || []) // []