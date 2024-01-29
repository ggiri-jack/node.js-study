const a = 0.1
const b = 0.2

console.log(Number((a+b).toFixed(1)))

// Boolean
const c = true
const d = false

if (d) {
  console.log('Hello')
}

let age
console.log(age)

setTimeout(function() {
  age = 20
  console.log(age)
}, 1000)

const user = {
  name: 'John',
  age: 30,
  email: null
}

console.log(user.name)
console.log(user.age)
console.log(user.email)