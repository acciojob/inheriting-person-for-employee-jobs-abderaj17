class Person{
    constructor(name, age){
        this.name = name;
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
   greet(){
    return `Hello, my name is ${this.name}, I am ${this.age} years old`;
   }
}

class Employee extends Person{
 constructor(name, age, jobTitle){
    super(name, age);
    this.jobTitle= jobTitle;
 }
 jobGreet(){
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
 }
}

const person1 = new Employee("Rakesh", 45, "Software Developer");
person1.greet();  // check the output
person1.jobGreet(); // check the output// check the output
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;