// let user = {
//     name: 'John',
//     age: 45,
//     email: 'john@example.com'
// }

// console.log(user.name);
// console.log(user.hasOwnProperty('email'));

// function Person(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
// }

// const john = new Person('John', '123@123', '2000-01-01');
// const jane = new Person('Jane', '456@123', '2000-01-02');
// console.log(john);
// console.log(jane);

// Person.prototype.calculateAge = function () {
//     const diff=Date.new() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

const personsPrototype = {
    calculateAge(){
        const diff=Date.new() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


    function Person(name, email, birthday) {
        const person = Object.create(personsPrototype);
        person.name = name;
        person.email = email;
        person.birthday = new Date(birthday);
        return person;
    }
    
    const john = new Person('John', '123@123', '2000-01-01');
    const jane = new Person('Jane', '456@123', '2000-01-02');
    console.log(john);
    console.log(jane);