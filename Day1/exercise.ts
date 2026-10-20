
abstract class Person{
    constructor(firstname:string,lastname:string){
    
    }

   abstract kill(person:Person):void;
}

class Student extends Person{


    kill(person: Person): void {
        throw new Error("Method not implemented.");
    }

}

interface Teach{
    teach(c:Course):void;
}

class Teacher extends Person implements Teach{

    constructor(firstname:string, lastname:string, course:string){
        super(firstname, lastname);
    }

    kill(person:Person):void{
        console.error("killing a person");
    }

    teach(c:Course):void{
        console.log(c.title);
    }

    

}

class Course{
    private students: Student[] = [];
    
    readonly title: string;

    constructor(title:string, description:string){
        this.title = title;
     
    };

    enrollStudent(s:Student){
        this.students?.push(s);
    }
}


let teachers: Teacher[] =  [new Teacher("Willy", "Vandersteen", "Suske & Wiske")];

// polymorphism op basis van een interface
let teachers2: Teach[] =  [new Teacher("Willy", "Vandersteen", "Suske & Wiske")];

// polymorphism op basis van een basis klasse
let people: Person[] =  [new Teacher("Willy", "Vandersteen", "Suske & Wiske"),
                         new Student("Kevin", "DeRudder")];