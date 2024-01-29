// class Person {
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = new Date(birthday);
//     }


// introduce(){
//     return `Hello my name is ${this.name} and my email is ${this.email} and my birthday`
//     }
//     static multipleNumber(x,y) {
//         return x * y;
//     }
// }

// const john = new Person('John', '123@123', '2000-01-01');
// console.log(john);

class Person {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday);
    }
    introduce(){
        return `Hello my name is ${this.name} and my email is ${this.email} and my birthday`
    }
}
class Client extends Person {
    constructor(name, email, birthday, phone, address) {
        super(name, email, birthday);
        this.phone = phone;
        this.address = address;
    }
}
const john = new Client('John', '123@123', '010-0000-0000');
console.log(john.introduce());
