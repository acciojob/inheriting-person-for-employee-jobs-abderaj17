class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
   greet(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
   }
}

class Employee extends Person{
 constructor(name, age, jobTitle){
    super(name, age);
    this.jobTitle= jobTitle;
 }
 jobGreet(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
 }
}

const person = new Person('John', 30);
person.greet(); // Output: Hello, my name is John, I am 30 years old.

const employee = new Employee('Jane', 25, 'Software Developer');
employee.greet();    // Output: Hello, my name is Jane, I am 25 years old.
employee.jobGreet(); 
window.Person = Person;
window.Employee = Employee;