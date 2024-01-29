// 객체
const user = new Object()
user.name = 'John'
user.age = 35

console.log(user)

// 함수방식

function User() {
  this.name = 'John'
  this.age = 35
}
const Use = new User()
console.log(Use)

//리터럴 방식
const Useer = {
  name: 'John',
  age: 35
}
const key = 'name'

console.log(Useer)
console.log(Useer.name)
console.log(Useer['name'])

console.log(Useer[key])

// parent 사용법

const userA = {
  name: 'Jae',
  age: 31
}

const userB = {
  name: 'HO',
  age: 32,
  parent : userA
}
console.log(userB.parent);
console.log(userB.parent.name);
console.log(userB['parent']);

// Array Object
const users = [userA, userB]

console.log(users[1].name);