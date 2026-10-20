"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstname, lastname) {
    }
}
class Student extends Person {
    kill(person) {
        throw new Error("Method not implemented.");
    }
}
class Teacher extends Person {
    constructor(firstname, lastname, course) {
        super(firstname, lastname);
    }
    kill(person) {
        console.error("killing a person");
    }
    teach(c) {
        console.log(c.title);
    }
}
class Course {
    students = [];
    title;
    constructor(title, description) {
        this.title = title;
    }
    ;
    enrollStudent(s) {
        this.students?.push(s);
    }
}
let teachers = [new Teacher("Willy", "Vandersteen", "Suske & Wiske")];
// polymorphism op basis van een interface
let teachers2 = [new Teacher("Willy", "Vandersteen", "Suske & Wiske")];
// polymorphism op basis van een basis klasse
let people = [new Teacher("Willy", "Vandersteen", "Suske & Wiske"),
    new Student("Kevin", "DeRudder")];
//# sourceMappingURL=exercise.js.map