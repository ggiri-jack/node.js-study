// 산술연산자

console.log(7+5);
console.log(5-7);
console.log(7*5);
console.log(7/5);
console.log(7%2);

function isEven(num) {
  return num % 2 === 0
}
console.log(isEven(7))
console.log(isEven(8))

// 할당연산자

const a = 1
const b = 2
const c = a + b
console.log(c)

let d = 1
d = d+3 // d+=3 means
d -= 2
d *= 2
d /= 2
d %= 2
console.log(d)

// 증감연산자
let e = 3

console.log(e++)
console.log(e);
console.log(++e);
console.log(e);
console.log(e--);
console.log(e);